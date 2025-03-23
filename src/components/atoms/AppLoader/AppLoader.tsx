import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import { COLORS } from '#constants/COLORS';
import { FLEX_1 } from '#constants/STYLES';

export const AppLoader = () => {
  return (
    <SafeAreaView style={FLEX_1}>
        <ActivityIndicator size="large" color={COLORS.BLACK} />
      </SafeAreaView>
  );
};
