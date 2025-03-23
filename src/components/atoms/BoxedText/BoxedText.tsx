import React from 'react';
import {View} from 'react-native';
import {FLEX_1} from '#constants/STYLES';
import {BoxedTextStyles} from './BoxedTextStyles';
import {useStyles} from 'react-native-unistyles';
import { getPx } from '#utils/APP_UTILS';
import { AppText } from '#atoms/AppText/AppText';

interface BoxedTextProps {
  text: string;
}

export const BoxedText = (props: BoxedTextProps) => {
  const {text} = props;
  const {styles} = useStyles(BoxedTextStyles);
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <AppText
          text={text}
          size={getPx(10)}
          weight={600}
          style={styles.text}
        />
      </View>
      <View style={FLEX_1} />
    </View>
  );
};
