import React from 'react';
import LottieView, { LottieViewProps } from "lottie-react-native";
import { getPx } from '#utils/APP_UTILS';

interface EmptyListProps extends LottieViewProps {
    source: string;
}

export const EmptyList = ({source, ...rest}: EmptyListProps) => {
  return (
    <LottieView
      {...rest}
      source={source}
      style={{width: getPx(200), height: getPx(200), alignSelf: 'center'}}
      autoPlay
      loop
    />
  );
};
