import React from 'react';
import {useStyles} from 'react-native-unistyles';
import {MovieDetailsStyles} from './MovieDetailsStyles';
import {CastType} from '#apis/movies/MovieCreditsType';
import {View} from 'react-native';
import {AppImage} from '#atoms/AppImage/AppImage';
import FastImage from 'react-native-fast-image';
import {SHADOW} from '#constants/STYLES';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';

const CastItem = ({item}: {item: CastType}) => {
  const {styles} = useStyles(MovieDetailsStyles);

  return (
    <View style={[styles.castItemContainer, SHADOW]}>
      <AppImage
        style={styles.castItemImage}
        imagePath={item.profile_path}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.castItemNameContainer}>
        <AppText text={item.name} weight={600} size={getPx(13)} />
        <AppText text={item.character} weight={400} size={getPx(10)} />
      </View>
    </View>
  );
};
export default CastItem;
