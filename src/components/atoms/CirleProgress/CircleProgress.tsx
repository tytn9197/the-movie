import React from 'react';
import * as Progress from 'react-native-progress';

interface CircleProgressProps extends Progress.CirclePropTypes {
  size: number;
  targetProgress: number;
}

export const CircleProgress = ({size, targetProgress, ...rest}: CircleProgressProps) => {
  return (
    <Progress.Circle
      {...rest}
      progress={targetProgress}
      thickness={5}
      indeterminate={false}
      showsText={true}
      size={size}
      animated={false}
    />
  );
};
