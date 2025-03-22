import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {MovieListStyles} from './MovieListStyles';
import {useStyles} from 'react-native-unistyles';
import {ResultType} from '#apis/movies/MovieListType';
import {ICONS} from '#constants/ICONS';
import {FLEX_GROW_1, FLEX_SHRINK_1} from '#constants/STYLES';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';
import {COLORS} from '#constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieNavigatorParamList } from '#navigators/MovieNavigator';

const MovieItem = ({item}: {item: ResultType}) => {
  const {styles} = useStyles(MovieListStyles);

  const navigation = useNavigation<NativeStackNavigationProp<MovieNavigatorParamList>>();
  
  const handlePress = () => {
    navigation.navigate('MovieDetails', {
      id: item.id.toString(),
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.movieItemContainer}>
      <View style={styles.logoContainer}>
        <ICONS.IC_LOGO style={FLEX_GROW_1} />
      </View>
      <View style={{width: getPx(5)}} />
      <View style={styles.itemDetailsContainer}>
        <AppText
          style={FLEX_SHRINK_1}
          text={item.title}
          weight={600}
          size={getPx(10)}
        />
        <AppText
          style={FLEX_SHRINK_1}
          text={item.release_date}
          weight={400}
          size={getPx(8)}
          color={COLORS.GRAY}
        />
        <View style={{height: getPx(10)}} />
        <AppText
          style={FLEX_SHRINK_1}
          text={item.overview}
          weight={400}
          size={getPx(8)}
          numberOfLines={2}
        />
      </View>
    </TouchableOpacity>
  );
};
export default MovieItem;
