import React, {useState} from 'react';
import {
  Pressable,
  ViewProps as RNViewProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';
import {ExpandableViewStyles} from './ExpandableViewStyles';
import {FLEX_1, FLEX_SHRINK_1} from '#constants/STYLES';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';
import {ICONS} from '#constants/ICONS';
import {COLORS} from '#constants/COLORS';
import { Item } from './Item';

export interface ExpandableViewProps extends RNViewProps {
  text: string;
  items?: string[];
}

export const ExpandableView = (props: ExpandableViewProps) => {
  const {text, items} = props;
  const {styles} = useStyles(ExpandableViewStyles);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.buttonContainer}>
        <View style={styles.buttonViewContainer}>
          <AppText text={text} weight={600} size={getPx(16)} />
          {isExpanded ? (
            <ICONS.IC_CHEVRON_DOWN
              width={getPx(13)}
              height={getPx(9)}
              color={COLORS.BLACK}
            />
          ) : (
            <ICONS.IC_CHEVRON_RIGHT
              width={getPx(9)}
              height={getPx(13)}
              color={COLORS.BLACK}
            />
          )}
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.contentContainer(isExpanded)}>
          {items?.map((item) => (
            <Item key={item} text={item} />
          ))}
        </View>
      )}
    </View>
  );
};
