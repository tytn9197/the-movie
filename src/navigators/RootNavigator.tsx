import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieNavigator from './MovieNavigator';
import WatchList from '#screens/watch-list/WatchList';
import {COLORS} from '#constants/COLORS';
import {ICONS} from '#constants/ICONS';
import {TabButton} from '#atoms/TabButton';
import {getPx} from '#utils/APP_UTILS';

export type BottomTabParamList = {
  MovieStack: undefined;
  WatchList: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MovieTabIcon = ({color, size}: {color: string; size: number}) => (
  <ICONS.IC_HOME
    color={color}
    width={getPx(size * 0.5)}
    height={getPx(size * 0.5)}
  />
);

const WatchListTabIcon = ({color, size}: {color: string; size: number}) => (
  // we are scaling the size of the icon to 95% of the size of the tab bar icon
  <ICONS.IC_WATCHLIST
    color={color}
    width={getPx(size * 0.45)}
    height={getPx(size * 0.45)}
  />
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
          marginTop: getPx(10),
          marginBottom: getPx(10),
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
