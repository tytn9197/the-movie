import React from 'react';
import MovieDetails from '#screens/movie-details/MovieDetails';
import MovieList from '#screens/movie-list/MovieList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MovieNavigatorParamList = {
  MovieList: undefined;
  MovieDetails: {id: number};
};

const Stack = createNativeStackNavigator<MovieNavigatorParamList>();

const MovieNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MovieList'} component={MovieList} />
      <Stack.Screen name={'MovieDetails'} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
