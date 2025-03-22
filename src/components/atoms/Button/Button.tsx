import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyles} from './styles';
import {useStyles} from 'react-native-unistyles';
import {MyButtonProps} from './types';

export const MyButton = ({onPress, text, isDisable, style}: MyButtonProps) => {
  const {styles} = useStyles(ButtonStyles);
  return (
    <TouchableOpacity
      style={{...styles.container(!!isDisable), ...style}}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={isDisable}>
      <Text numberOfLines={1} style={styles.text(!!isDisable)}>{text}</Text>
    </TouchableOpacity>
  );
};
