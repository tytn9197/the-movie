import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {MovieListStyles} from './MovieListStyles';
import {useStyles} from 'react-native-unistyles';
import { ResultType } from '#apis/movies/MovieListType';

const MovieItem = ({item}: {item: ResultType}) => {
  const {styles} = useStyles(MovieListStyles);

  return (
    <View style={styles.movieItemContainer}>
        <Text>{item.title}</Text>
    </View>
  );
};
export default MovieItem;
