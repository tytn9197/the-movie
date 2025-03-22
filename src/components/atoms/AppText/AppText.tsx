import React, {ReactNode} from 'react';
import {Text, TextStyle, TextProps as RNTextProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {AppTextStyles} from './AppTextStyles';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle;
  /**
   * Text weight modifier.
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold';
  /**
   * Text size modifier.
   */
  size?: number;
  /**
   * Children components.
   */
  children?: ReactNode;
  /**
   * Text color.
   */
  color?: string;
}

export const AppText = (props: TextProps) => {
  const {weight, size, text, children, style, color, ...rest} = props;
  const {styles} = useStyles(AppTextStyles);

  const content = text || children;

  return (
    <Text
      {...rest}
      style={{
        ...styles.text,
        ...(!!weight && {fontWeight: weight}),
        ...(!!size && {fontSize: size}),
        ...(!!color && {color}),
        ...style,
      }}>
      {content}
    </Text>
  );
};
