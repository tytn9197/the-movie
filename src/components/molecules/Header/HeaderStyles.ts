import { getPx } from '#utils/APP_UTILS';
import {createStyleSheet} from 'react-native-unistyles';

export const HeaderStyles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  arrowLeft: {
    marginStart: getPx(10),
    marginEnd: getPx(10),
  },
  text: {
    textAlign: 'center',
    flex:1,
  },
  subText: {
    marginStart: getPx(10),
    flex:1,
  },

}));
