import { COLORS } from '#constants/COLORS';
import { getPx } from '#utils/APP_UTILS';
import { StyleSheet } from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

export const ExpandableViewStyles = createStyleSheet(() => ({
  container: {
    alignItems: 'center',
    borderWidth: getPx(1),
    borderColor: COLORS.BORDER,
    borderRadius: getPx(3),
    flexShrink:1,
    width: "100%",
  },
  buttonContainer: {
    paddingHorizontal: getPx(10),
    paddingTop: getPx(10),
    paddingBottom: getPx(10),
    width: "100%",
    flexShrink:1,
  },
  buttonViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    flexShrink:1,
    justifyContent: 'space-between',
  },
  contentSeparator: (isExpanded: boolean) => ({
    borderTopWidth: isExpanded ? StyleSheet.hairlineWidth : 0,
    borderTopColor: COLORS.BORDER,
    width: "100%",
    flexShrink:1,
  }),
  contentContainer: {
    backgroundColor: "transparent",
    marginTop: getPx(10),
    marginBottom: getPx(10),
    width: "90%",
    alignSelf: 'center',
    gap: getPx(10),
    flexShrink:1,
  },
  textContainer: (isSelected: boolean) => ({
    backgroundColor: isSelected ? COLORS.BLUE_2 : COLORS.LIGHT_GRAY_3,
    height: getPx(20),
    width: "100%",
    justifyContent: 'center',
    flexShrink:1,
    borderRadius: getPx(2),
    paddingStart: getPx(10),
    flexWrap: 'wrap',
    gap: getPx(5),
  }),

}));
