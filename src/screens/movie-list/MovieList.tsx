import {ICONS} from '#constants/ICONS';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TextInput,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {MovieListStyles} from './MovieListStyles';
import {useStyles} from 'react-native-unistyles';
import {FLEX_1} from '#constants/STYLES';
import {ExpandableView} from '#molecules/ExpandableView/ExpandableView';
import {getPx} from '#utils/APP_UTILS';
import {useGetMovieListQuery} from '#apis/APIServices';
import {COLORS} from '#constants/COLORS';
import { ResultType } from '#apis/movies/MovieListType';
import MovieItem from './MovieItem';
import { AppText } from '#atoms/AppText/AppText';

const MovieList = () => {
  const {styles} = useStyles(MovieListStyles);

  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const {data, isLoading, isError, refetch, isFetching, error} = useGetMovieListQuery({ 
    type: 'now_playing', 
    page: page 
  });

  const renderEmptyComponent = () => {
    return <Text>No data</Text>;
  };

  const renderItem = ({item}: {item: ResultType}) => {
    return <MovieItem item={item} />
  };

  const renderSeparator = () => {
    return <View style={{height: getPx(10)}} />
  };

  const handleEndReached = () => {
    if (!isFetching && data?.total_pages && page < data.total_pages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleRefresh = () => {
    setPage(1)
    refetch()
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[FLEX_1, styles.container]}>
        <ActivityIndicator size="large" color={COLORS.BLACK} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[FLEX_1, styles.container]}>
      <ICONS.IC_LOGO width={getPx(57*0.7)} height={getPx(80*0.7)} style={styles.logo} />
      <ExpandableView text="playin" items={['1', '2', '3']} />
      <ExpandableView text="playin" items={['1', '2', '3']} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={COLORS.GRAY}
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.searchButton}>
        <AppText text="Search" weight={600} size={getPx(10)} color={COLORS.LIGHT_GRAY} />
      </TouchableOpacity>
      {isError && <Text style={{color: COLORS.RED}}>Error</Text>}
      {!!data?.results && (
        <FlatList
          style={FLEX_1}
          data={data?.results}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
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
      )}
    </SafeAreaView>
  );
};
export default MovieList;
