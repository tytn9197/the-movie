import {createStyleSheet} from 'react-native-unistyles';

export const LogoScrollViewStyles = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  centerView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
}));
