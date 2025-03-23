import React from 'react';
import {ViewProps as RNViewProps, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {HeaderStyles} from './HeaderStyles';
import {ICONS} from '#constants/ICONS';
import {getPx} from '#utils/APP_UTILS';
import {AppText} from '#atoms/AppText/AppText';
import {COLORS} from '#constants/COLORS';

export interface HeaderProps extends RNViewProps {
  text: string;
  subText?: string;
  onPress?: () => void;
}

export const Header = (props: HeaderProps) => {
  const {text, subText, onPress} = props;
  const {styles} = useStyles(HeaderStyles);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <ICONS.IC_ARROW_LEFT
          style={styles.arrowLeft}
          width={getPx(10)}
          height={getPx(10)}
          color={COLORS.WHITE}
        />
      </TouchableOpacity>
      <AppText
        style={styles.text}
        color={COLORS.WHITE}
        weight={600}
        size={getPx(13)}>
        {text}{' '}
        {subText && (
          <AppText
            text={`(${subText})`}
            style={styles.subText}
            color={COLORS.WHITE}
            weight={400}
            size={getPx(11)}
          />
        )}
      </AppText>
    </View>
  );
};
