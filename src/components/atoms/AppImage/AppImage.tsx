import { COLORS } from '#constants/COLORS';
import {ICONS} from '#constants/ICONS';
import React from 'react';
import {ActivityIndicator, StyleProp} from 'react-native';
import FastImage, {ImageStyle, ResizeMode} from 'react-native-fast-image';

interface AppImageProps {
  imagePath: string;
  downloadWidth?: number;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
}

export const AppImage = ({imagePath, style, downloadWidth, resizeMode, ...rest}: AppImageProps) => {
  const renderError = () => {
    return <ICONS.IC_LOGO width={downloadWidth} height={downloadWidth} />;
  };

  const renderLoading = () => {
    return <ActivityIndicator size="large" color={COLORS.BLACK} />
  };

  if (!imagePath) {
    return <ICONS.IC_LOGO width={downloadWidth} height={downloadWidth} />;
  }

  return (
    <FastImage
      {...rest}
      style={style}
      source={{
        uri: `https://image.tmdb.org/t/p/w${downloadWidth ?? 500}/${imagePath}`,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode}
      onError={renderError}
      onLoad={renderLoading}
    />
  );
};
