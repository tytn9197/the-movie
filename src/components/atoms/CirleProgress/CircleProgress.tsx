import React from 'react';
import * as Progress from 'react-native-progress';

interface CircleProgressProps {
  size: number;
  targetProgress: number;
}

export const CircleProgress = ({size, targetProgress}: CircleProgressProps) => {
  return (
    <Progress.Circle
      progress={targetProgress}
      thickness={5}
      indeterminate={false}
      showsText={true}
      size={size}
      animated={false}
    />
  );
};
