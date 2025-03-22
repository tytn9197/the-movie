import { APP_CONST } from '#constants/APP_CONSTANTS';
import { COLORS } from '#constants/COLORS';
import { getPx } from '#utils/APP_UTILS';
import {createStyleSheet} from 'react-native-unistyles';

export const MovieListStyles = createStyleSheet(() => ({
  container: {
    marginHorizontal: getPx(12),
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: getPx(1),
    borderColor: COLORS.BORDER,
    borderRadius: getPx(3),
    paddingHorizontal: getPx(6),
    paddingVertical: getPx(5),
    marginVertical: getPx(6),
    height: getPx(25),
    width: '100%',
    fontSize: getPx(10),
    fontWeight: 600,
    color: COLORS.BLACK,
    fontFamily: APP_CONST.FONTS.SOURCE_SANS_3,
  },
  movieItemContainer: {
    borderWidth: getPx(1),
    borderColor: COLORS.BORDER,
    borderRadius: getPx(3),
    padding: getPx(10),
  },
  searchButton: {
    backgroundColor: COLORS.LIGHT_GRAY_2,
    paddingHorizontal: getPx(10),
    paddingVertical: getPx(5),
    borderRadius: getPx(20),
    height: getPx(25),
    width: '100%',
    marginBottom: getPx(10),
    alignItems: 'center',
    justifyContent: 'center',
  }
}));
