import { COLORS } from '#constants/COLORS';
import { getPx } from '#utils/APP_UTILS';
import { StyleSheet } from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

export const BoxedTextStyles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
  },
  border: {
    padding: getPx(5),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.LIGHT_GRAY_4,
    borderRadius: getPx(2),
  },
  text: {
    color: COLORS.LIGHT_GRAY_4,
  },
}));
