import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {ExpandableViewStyles} from './ExpandableViewStyles';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';

export interface ItemProps {
  text: string;
  onPress?: () => void;
  isSelected?: boolean;
}

export const Item = (props: ItemProps) => {
  const {text, onPress, isSelected} = props;
  const {styles} = useStyles(ExpandableViewStyles);

  return (
    <TouchableOpacity style={styles.textContainer(isSelected ?? false)} onPress={onPress}>
      <AppText text={text} weight={400} size={getPx(10)} />
    </TouchableOpacity>
  );
};
