import React from 'react';
import {ViewProps as RNViewProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {LogoScrollViewStyles} from './LogoScrollViewStyles';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';

export interface LogoScrollViewProps extends RNViewProps {
  Icon: React.ComponentType<{width?: number; height?: number; style?: any}>;
}

export const LogoScrollView = (props: LogoScrollViewProps) => {
  const {children, Icon} = props;
  const {styles} = useStyles(LogoScrollViewStyles);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const logoRatio = useAnimatedStyle(() => {
    const size = interpolate(scrollY.value, [0, 200], [300, 100], {
      extrapolateRight: 'clamp',
    });

    return {
      width: size,
      height: size,
    };
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={scrollHandler}>
      <Animated.View style={[styles.centerView, logoRatio]}>
        {!!Icon && (
          <Icon
            width={logoRatio.width}
            height={logoRatio.height}
            style={styles.logo}
          />
        )}
      </Animated.View>
      {children}
    </Animated.ScrollView>
  );
};
