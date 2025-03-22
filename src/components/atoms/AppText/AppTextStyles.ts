import {createStyleSheet} from 'react-native-unistyles';

export const AppTextStyles = createStyleSheet(theme => ({
  text: {
    fontFamily: 'SourceSans3',
    color: theme.txtPrimary,
  },
}));
