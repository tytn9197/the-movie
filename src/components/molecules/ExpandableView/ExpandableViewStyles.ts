import { getPx } from '#utils/APP_UTILS';
import { StyleSheet } from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

export const ExpandableViewStyles = createStyleSheet(() => ({
  container: {
    alignItems: 'center',
    borderWidth: getPx(1),
    borderColor: '#E3E3E3',
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
  contentContainer: (isExpanded: boolean) => ({
    borderTopWidth: isExpanded ? StyleSheet.hairlineWidth : 0,
    borderTopColor: '#E3E3E3',
    width: "100%",
    flexShrink:1,
  }),
  textContainer: {

  },

}));
