import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {ExpandableViewStyles} from './ExpandableViewStyles';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';

export interface ItemProps {
  text: string;
}

export const Item = (props: ItemProps) => {
  const {text} = props;
  const {styles} = useStyles(ExpandableViewStyles);

  return (
    <TouchableOpacity style={styles.textContainer}>
      <AppText text={text} weight={600} size={getPx(16)} />
    </TouchableOpacity>
  );
};
