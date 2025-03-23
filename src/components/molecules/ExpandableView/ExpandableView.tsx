import React from 'react';
import {ViewProps as RNViewProps, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {ExpandableViewStyles} from './ExpandableViewStyles';
import {AppText} from '#atoms/AppText/AppText';
import {getPx} from '#utils/APP_UTILS';
import {ICONS} from '#constants/ICONS';
import {COLORS} from '#constants/COLORS';
import {Item} from './Item';
import {SHADOW} from '#constants/STYLES';

export interface ExpandableViewItem {
  id: string;
  text: string;
}

export interface ExpandableViewProps extends RNViewProps {
  text: string;
  items?: ExpandableViewItem[];
  onItemPress?: (item: ExpandableViewItem) => void;
  selectedId?: string | null;
  isExpanded: boolean;
  onPressExpand: () => void;
}

export const ExpandableView = (props: ExpandableViewProps) => {
  const {text, items, onItemPress, selectedId, isExpanded, onPressExpand} =
    props;
  const {styles} = useStyles(ExpandableViewStyles);

  const handleItemPress = (item: ExpandableViewItem) => {
    onItemPress?.(item);
  };

  return (
    <View style={[styles.container, SHADOW]}>
      <TouchableOpacity onPress={onPressExpand} style={styles.buttonContainer}>
        <View style={styles.buttonViewContainer}>
          <AppText text={text} weight={600} size={getPx(8)} />
          {isExpanded ? (
            <ICONS.IC_CHEVRON_DOWN
              width={getPx(13 * 0.8)}
              height={getPx(9 * 0.8)}
              color={COLORS.BLACK}
            />
          ) : (
            <ICONS.IC_CHEVRON_RIGHT
              width={getPx(9 * 0.8)}
              height={getPx(13 * 0.8)}
              color={COLORS.BLACK}
            />
          )}
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.contentSeparator(isExpanded)}>
          <View style={styles.contentContainer}>
            {items?.map(item => (
              <Item
                key={item.id}
                text={item.text}
                onPress={() => handleItemPress(item)}
                isSelected={item.id === selectedId}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};
