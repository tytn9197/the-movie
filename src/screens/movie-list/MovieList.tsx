import {ICONS} from '#constants/ICONS';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  RefreshControl,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {MovieListStyles} from './MovieListStyles';
import {useStyles} from 'react-native-unistyles';
import {FLEX_1, SHADOW} from '#constants/STYLES';
import {
  ExpandableView,
  ExpandableViewItem,
} from '#molecules/ExpandableView/ExpandableView';
import {getPx} from '#utils/APP_UTILS';
import {
  useGetMovieListQuery,
  useLazyGetMoviesSearchQuery,
} from '#apis/APIServices';
import {COLORS} from '#constants/COLORS';
import {MovieListType, ResultType} from '#apis/movies/MovieListType';
import MovieItem from './MovieItem';
import {AppText} from '#atoms/AppText/AppText';
import {getMovieTypeName, setMovieType, setSortBy} from '#slices/homeSlice';
import {useAppDispatch, useAppSelector} from '#hooks/AppHooks';
import {MOVIE_TYPE_ITEMS, SORT_BY_ITEMS} from './MovieListContants';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';
import {AppLoader} from '#atoms/AppLoader/AppLoader';
import { EmptyList } from '#atoms/EmptyList/EmptyList';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieList = () => {
  const {styles} = useStyles(MovieListStyles);

  const movieTypeText = useAppSelector(getMovieTypeName);
  const movieType = useAppSelector(state => state.home.movieType);
  const sortBy = useAppSelector(state => state.home.sortBy);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedData, setSearchedData] = useState<MovieListType | null>(null);
  const [isTypeExpanded, setIsTypeExpanded] = useState<boolean>(false);
  const [isSortByExpanded, setIsSortByExpanded] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const flatListRef = useRef<FlatList<ResultType>>(null);

  //for scroll animation
  const scrollY = useSharedValue(0);

  const logoSizes = useAnimatedStyle(() => {
    const size = interpolate(scrollY.value, [0, 150], [100, 50], {
      extrapolateRight: 'clamp',
    });

    return {
      width: size,
      height: size,
    };
  }, [scrollY.value]);

  const backToTopButtonBottom = useAnimatedStyle(() => {
    const size = interpolate(scrollY.value, [0, 400], [-70, 20], {
      extrapolateRight: 'clamp',
    });

    return {
      bottom: size,
    };
  }, [scrollY.value]);

  const {data, isLoading, isError, isFetching, error} = useGetMovieListQuery({
    type: movieType,
    page: page,
  });

  const [
    getMoviesSearch,
    {
      data: searchDataQuery,
      isLoading: searchLoading,
      isError: isSearchError,
      isFetching: searchFetching,
      error: searchError,
    },
  ] = useLazyGetMoviesSearchQuery();

  const renderEmptyComponent = () => {
    return (
      <EmptyList source={require('../../assets/animations/lottie_empty.json')} />
    );
  };

  const renderItem = ({item}: {item: ResultType}) => {
    return <MovieItem item={item} />;
  };

  const renderSeparator = () => {
    return <View style={{height: getPx(10)}} />;
  };

  const handleEndReached = async () => {
    if (
      !isSearching &&
      !isFetching &&
      !!data?.total_pages &&
      page < data.total_pages
    ) {
      setPage(prevPage => prevPage + 1);
    }

    if (
      isSearching &&
      !searchFetching &&
      !!searchDataQuery?.total_pages &&
      page < searchDataQuery.total_pages
    ) {
      const result = await getMoviesSearch({query: search, page: page + 1});
      const newResults = result?.data?.results ?? [];

      const newSearchedData = {
        ...result.data,
        results: [...newResults],
      };

      setSearchedData(newSearchedData as MovieListType);
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleRefresh = () => {
    setPage(1);
    setSearch('');
    setIsSearching(false);
  };

  const handleMovieTypeChange = (item: ExpandableViewItem) => {
    if (isTypeExpanded) {
      setIsTypeExpanded(false);
    }

    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
    handleRefresh();
    dispatch(setMovieType(item.id as typeof movieType));
  };

  const handleSortByChange = (item: ExpandableViewItem) => {
    if (isSortByExpanded) {
      setIsSortByExpanded(false);
    }

    if (item.id === sortBy) {
      dispatch(setSortBy(null));
    } else {
      dispatch(setSortBy(item.id as typeof sortBy));
    }
  };

  const handleMovieTypeExpand = () => {
    if (isSortByExpanded) {
      setIsSortByExpanded(false);
    }

    setIsTypeExpanded(prev => !prev);
  };

  const handleSortByExpand = () => {
    if (isTypeExpanded) {
      setIsTypeExpanded(false);
    }

    setIsSortByExpanded(prev => !prev);
  };

  const handleSearch = async () => {
    setPage(1);

    if (search === '') {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
    const result = await getMoviesSearch({query: search, page: 1});
    setSearchedData(result?.data ?? null);
  };

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const handleMomentumScrollBegin = () => {
    if (isTypeExpanded || isSortByExpanded) {
      setIsTypeExpanded(false);
      setIsSortByExpanded(false);
      return;
    }
  };

  const renderHeader = () => {
    return (
      <>
        <Animated.View style={[styles.logo, logoSizes]}>
          <ICONS.IC_LOGO
            width={logoSizes.width}
            height={logoSizes.height}
            style={styles.logo}
          />
        </Animated.View>
        <ExpandableView
          text={movieTypeText}
          items={MOVIE_TYPE_ITEMS}
          onItemPress={handleMovieTypeChange}
          selectedId={movieType}
          isExpanded={isTypeExpanded}
          onPressExpand={handleMovieTypeExpand}
        />
        <View style={{height: getPx(8)}} />
        <ExpandableView
          text="Sort by"
          items={SORT_BY_ITEMS}
          onItemPress={handleSortByChange}
          selectedId={sortBy}
          isExpanded={isSortByExpanded}
          onPressExpand={handleSortByExpand}
        />
        <TextInput
          style={[styles.input, SHADOW]}
          placeholder="Search..."
          placeholderTextColor={COLORS.GRAY}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <AppText
            text="Search"
            weight={600}
            size={getPx(10)}
            color={COLORS.LIGHT_GRAY}
          />
        </TouchableOpacity>
      </>
    );
  };

  const handleBackToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  const renderBackToTopButton = () => {
    return (
      <Animated.View style={[styles.backToTopButton, backToTopButtonBottom]}>
        <TouchableOpacity onPress={handleBackToTop}>
          <ICONS.IC_ARROW_UP
            color={COLORS.WHITE}
            width={getPx(13)}
            height={getPx(9)}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (isLoading || searchLoading) {
    return <AppLoader />;
  }

  return (
    <SafeAreaView style={[FLEX_1, styles.container]} edges={['top']}>
      <View style={[FLEX_1, styles.marginHorizontal]}>
        {isError && (
          <AppText color={COLORS.RED} size={getPx(10)} weight={600}>
            {JSON.stringify(error)}
          </AppText>
        )}
        {isSearching && isSearchError && (
          <AppText color={COLORS.RED} size={getPx(10)} weight={600}>
            {JSON.stringify(searchError)}
          </AppText>
        )}
        {renderHeader()}
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          onMomentumScrollBegin={handleMomentumScrollBegin}
          style={FLEX_1}
          data={isSearching ? searchedData?.results ?? [] : data?.results ?? []}
          renderItem={renderItem}
          keyExtractor={item => JSON.stringify(item)}
          ListEmptyComponent={renderEmptyComponent}
          ItemSeparatorComponent={renderSeparator}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          refreshing={isLoading}
          refreshControl={
            <RefreshControl
              tintColor={COLORS.BLACK}
              refreshing={isLoading}
              onRefresh={handleRefresh}
            />
          }
        />
        {renderBackToTopButton()}
      </View>
    </SafeAreaView>
  );
};
export default MovieList;
