import {FLEX_1, ROW_CENTERED} from '#constants/STYLES';
import React, {useMemo} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {MovieDetailsStyles} from './MovieDetailsStyles';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {ICONS} from '#constants/ICONS';
import {AppText} from '#atoms/AppText/AppText';
import {Header} from '#molecules/Header/Header';
import {
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
} from '#apis/APIServices';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MovieNavigatorParamList} from '#navigators/MovieNavigator';
import {AppLoader} from '#atoms/AppLoader/AppLoader';
import {COLORS} from '#constants/COLORS';
import {getPx} from '#utils/APP_UTILS';
import {convertMinutesToHoursAndMinutes, getYearFromDate} from '#utils/HELPERS';
import {BoxedText} from '#atoms/BoxedText/BoxedText';
import {AppImage} from '#atoms/AppImage/AppImage';
import {CircleProgress} from '#atoms/CirleProgress/CircleProgress';
import CastItem from './CastItem';
import { CastType } from '#apis/movies/MovieCreditsType';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieDetails = () => {
  const {styles} = useStyles(MovieDetailsStyles);

  const {id} =
    useRoute<RouteProp<MovieNavigatorParamList, 'MovieDetails'>>().params;

  const navigation = useNavigation();

  const {data, isLoading, isError, error} = useGetMovieDetailsQuery(id);
  const {
    data: creditsData,
    isLoading: creditsLoading,
    isError: isCreditsError,
    error: creditsError,
  } = useGetMovieCreditsQuery(id);

  const directors = useMemo(() => {
    const filteredDirectors =
      creditsData?.crew.filter(
        crew => crew.job === 'Director' || crew.job === 'Writer',
      ) ?? [];

    // 1 id can do multiple jobs
    // merge their job into one id
    const directorsMap: Record<
      number,
      {id: number; job: string; name: string}
    > = {};
    filteredDirectors?.forEach(director => {
      if (directorsMap[director.id]) {
        directorsMap[director.id].job = [
          directorsMap[director.id].job,
          director.job,
        ].join(', ');
      } else {
        directorsMap[director.id] = {...director};
      }
    });

    return Object.values(directorsMap);
  }, [creditsData]);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const logoSizes = useAnimatedStyle(() => {
    const size = interpolate(scrollY.value, [0, 150], [100, 50], {
      extrapolateRight: 'clamp',
    });

    return {
      width: size,
      height: size,
    };
  }, [scrollY.value]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderCastItem = ({item}: {item: CastType}) => {
    return <CastItem item={item} />;
  };

  const renderCastItemSeparator = () => {
    return <View style={{width: getPx(10)}} />;
  };

  if (isLoading || creditsLoading) {
    return <AppLoader />;
  }

  return (
    <SafeAreaView style={[FLEX_1, styles.container]}>
      <Animated.ScrollView
        style={FLEX_1}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}>
        <Animated.View style={[styles.logo, logoSizes]}>
          <ICONS.IC_LOGO
            width={logoSizes.width}
            height={logoSizes.height}
            style={styles.logo}
          />
        </Animated.View>
        {isError && (
          <AppText color={COLORS.RED} size={getPx(10)} weight={600}>
            {JSON.stringify(error)}
          </AppText>
        )}
        {isCreditsError && (
          <AppText color={COLORS.RED} size={getPx(10)} weight={600}>
            {JSON.stringify(creditsError)}
          </AppText>
        )}
        {!!data && !!creditsData && (
          <View style={styles.dataContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.headerContainer}>
                <Header
                  onPress={handleBackPress}
                  text={data.title}
                  subText={getYearFromDate(data.release_date)}
                />
                <View style={{height: getPx(28)}} />
                <View style={styles.movieDetailsContainer}>
                  <AppImage
                    style={styles.image}
                    imagePath={
                      !!data && data.backdrop_path ? data.backdrop_path : ''
                    }
                  />
                  <View style={styles.movieDetails}>
                    <BoxedText text={data.imdb_id.toString()} />
                    <AppText color={COLORS.WHITE} weight={400} size={getPx(10)}>
                      {data.release_date}{' '}
                      {data.production_countries?.length > 0 && (
                        <AppText
                          text={`(${data.production_countries
                            .map(country => country.iso_3166_1)
                            .join(' ')})`}
                          color={COLORS.WHITE}
                          weight={400}
                          size={getPx(10)}
                        />
                      )}
                      {` • `}
                      <AppText
                        text={convertMinutesToHoursAndMinutes(data.runtime)}
                        color={COLORS.WHITE}
                        weight={400}
                        size={getPx(10)}
                      />
                    </AppText>
                    {data.genres?.length > 0 && (
                      <AppText
                        text={data.genres.map(genre => genre.name).join(', ')}
                        color={COLORS.WHITE}
                        weight={400}
                        size={getPx(10)}
                      />
                    )}

                    <AppText color={COLORS.WHITE} weight={600} size={getPx(10)}>
                      Status:{' '}
                      <AppText
                        text={data.status}
                        color={COLORS.WHITE}
                        weight={400}
                        size={getPx(10)}
                      />
                    </AppText>
                    <AppText color={COLORS.WHITE} weight={600} size={getPx(10)}>
                      Original Language:{' '}
                      <AppText
                        text={data.original_language}
                        color={COLORS.WHITE}
                        weight={400}
                        size={getPx(10)}
                      />
                    </AppText>
                  </View>
                </View>
              </View>
              <View style={styles.voteAndCreditsContainer}>
                <View style={styles.voteContainer}>
                  <View style={styles.voteProgressContainer}>
                    <CircleProgress
                      unfilledColor={COLORS.LIGHT_GRAY_6}
                      borderColor={'transparent'}
                      color={COLORS.GREEN_2}
                      textStyle={styles.voteProgressText}
                      style={styles.voteProgress}
                      targetProgress={data.vote_average / 10}
                      size={getPx(40)}
                    />
                  </View>
                  <AppText
                    text="User Score"
                    color={COLORS.WHITE}
                    weight={600}
                    size={getPx(8)}
                    style={FLEX_1}
                  />
                </View>
                <View style={styles.creditsContainer}>
                  {!!directors &&
                    directors?.length > 0 &&
                    directors.map(director => (
                      <View
                        key={`${director.id}-${director.job}-${director.name}`}>
                        <AppText
                          text={director.name}
                          color={COLORS.WHITE}
                          weight={600}
                          size={getPx(10)}
                        />
                        <AppText
                          text={director.job}
                          color={COLORS.WHITE}
                          weight={400}
                          size={getPx(10)}
                        />
                      </View>
                    ))}
                </View>
              </View>
              <View style={styles.overviewContainer}>
                <AppText
                  text={data.tagline}
                  color={COLORS.WHITE}
                  weight={400}
                  size={getPx(10)}
                />
                <View style={{height: getPx(10)}} />
                <AppText
                  text={'Overview'}
                  color={COLORS.WHITE}
                  weight={700}
                  size={getPx(13)}
                />
                <AppText
                  text={data.overview}
                  color={COLORS.WHITE}
                  weight={400}
                  size={getPx(10)}
                />
                <View style={{height: getPx(10)}} />
                <View style={ROW_CENTERED}>
                  <TouchableOpacity style={styles.addToWatchlistButton}>
                    <View style={styles.addToWatchlistContainer}>
                      <ICONS.IC_WATCHLIST
                        width={getPx(7)}
                        height={getPx(9)}
                        color={COLORS.WHITE}
                      />
                      <AppText
                        text={'Add to Watchlist'}
                        color={COLORS.WHITE}
                        weight={700}
                        size={getPx(11)}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={FLEX_1} />
                </View>
              </View>
            </View>
            <View style={styles.castContainer}>
              <AppText text={'Top billed cast'} weight={600} size={getPx(13)} />
              <FlatList
                data={creditsData?.cast}
                renderItem={renderCastItem}
                horizontal
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={renderCastItemSeparator}
              />
            </View>
          </View>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
export default MovieDetails;
