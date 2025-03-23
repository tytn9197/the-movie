import {APP_CONST} from '#constants/APP_CONSTANTS';
import {COLORS} from '#constants/COLORS';
import {getPx} from '#utils/APP_UTILS';
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
  voteAndCreditsContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: getPx(15),
  },
  voteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: getPx(15),
    flexShrink: 1,
  },
  voteProgressContainer: {
    backgroundColor: COLORS.DARK_BLUE,
    padding: 5,
    borderRadius: getPx(40),
    marginBottom: getPx(3),
  },
  voteProgress: {
    backgroundColor: COLORS.DARK_BLUE,
    borderRadius: getPx(40),
  },
  voteProgressText: {
    color: COLORS.WHITE,
    fontSize: getPx(10),
    fontWeight: 700,
    fontFamily: APP_CONST.FONTS.SOURCE_SANS_3,
  },
  creditsContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE_3,
    flex: 1,
    alignItems: 'flex-end',
  },
}));
