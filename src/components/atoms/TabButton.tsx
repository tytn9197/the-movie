import React, {useEffect, useMemo} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';

export const TabButton = (props: any) => {
  const {children, accessibilityState, onPress} = props;
  const focused = accessibilityState.selected;

  const scale = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    if (focused) {
      Animated.spring(scale, {
        toValue: 1.2,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scale, {
        toValue: 0.6,
        useNativeDriver: true,
      }).start();
    }
  }, [focused, scale]);

  return (
    <Pressable onPress={onPress} style={styles.tabButton}>
      <Animated.View style={{transform: [{scale}]}}>{children}</Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
