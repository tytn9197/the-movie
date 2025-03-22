import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieNavigator from './MovieNavigator';
import WatchList from '#screens/watch-list/WatchList';

export type BottomTabParamList = {
  MovieStack: undefined;
  WatchList: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const RootNavigator = (): React.JSX.Element => {

  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name={'MovieStack'} component={MovieNavigator} />
        <BottomTab.Screen name={'WatchList'} component={WatchList} />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
