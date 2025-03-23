import { APP_CONST } from '#constants/APP_CONSTANTS';
import { COLORS } from '#constants/COLORS';
import { getPx } from '#utils/APP_UTILS';
import {createStyleSheet} from 'react-native-unistyles';

export const MovieListStyles = createStyleSheet(() => ({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  marginHorizontal: {
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
    height: getPx(100),
    width: '100%',
    flexDirection: 'row',
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
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  posterImage: {
    width: getPx(70),
    height: getPx(100),
    overflow: 'hidden',
  },
  itemDetailsContainer: {
    flexShrink: 1,
    justifyContent: 'center',
    marginEnd: getPx(3),
  },
  backToTopButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_BLUE,
    width: getPx(20),
    height: getPx(20),
    position: 'absolute',
    bottom: getPx(10),
    right: 0,
    borderRadius: getPx(10),
  }
}));
