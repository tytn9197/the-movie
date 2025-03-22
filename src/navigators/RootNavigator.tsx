import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieNavigator from './MovieNavigator';
import WatchList from '#screens/watch-list/WatchList';
import {COLORS} from '#constants/COLORS';
import {ICONS} from '#constants/ICONS';
import { TabButton } from '#atoms/TabButton';

export type BottomTabParamList = {
  MovieStack: undefined;
  WatchList: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MovieTabIcon = ({color, size}: {color: string; size: number}) => (
  <ICONS.IC_HOME color={color} width={size} height={size} />
);

const WatchListTabIcon = ({color, size}: {color: string; size: number}) => (
  <ICONS.IC_WATCHLIST color={color} width={size * 0.95} height={size * 0.95} />
);

const RootNavigator = (): React.JSX.Element => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.DARK_BLUE},
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.WHITE,
        animation: 'fade',
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <BottomTab.Screen
        name={'MovieStack'}
        component={MovieNavigator}
        options={{
          tabBarIcon: MovieTabIcon,
          tabBarButton: props => <TabButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name={'WatchList'}
        component={WatchList}
        options={{
          tabBarIcon: WatchListTabIcon,
          tabBarButton: props => <TabButton {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
