import { APP_CONST } from '#constants/APP_CONSTANTS';
import {createStyleSheet} from 'react-native-unistyles';

export const AppTextStyles = createStyleSheet(theme => ({
  text: {
    fontFamily: APP_CONST.FONTS.SOURCE_SANS_3,
    color: theme.txtPrimary,
  },
}));
