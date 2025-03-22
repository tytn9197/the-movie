import React from 'react';
import MovieDetails from '#screens/movie-details/MovieDetails';
import MovieList from '#screens/movie-list/MovieList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type BottomTabParamList = {
  MovieList: undefined;
  MovieDetails: {id: string};
};

const Stack = createNativeStackNavigator();

const MovieNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'MovieList'} component={MovieList} />
      <Stack.Screen name={'MovieDetails'} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
