import { COLORS } from '#constants/COLORS';
import { getPx } from '#utils/APP_UTILS';
import {createStyleSheet} from 'react-native-unistyles';

export const MovieDetailsStyles = createStyleSheet(() => ({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexShrink: 1,
    width: '100%',
    backgroundColor: COLORS.BLUE_2,
  },
  headerContainer: {
    backgroundColor: COLORS.BLUE_3,
    paddingVertical: getPx(10),
  },
  movieDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    maxWidth: getPx(50),
    maxHeight: getPx(80),
    borderRadius: getPx(5),
    overflow: 'hidden',
    marginHorizontal: getPx(10),
  },
  movieDetails: {
    flex: 1,
    marginEnd: getPx(5),
  },
}));
