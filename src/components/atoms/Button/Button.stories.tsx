import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {MyButton} from './Button';

const meta = {
  title: 'Atoms/MyButton',
  component: MyButton,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello world',
  },
  parameters: {
    notes: `
      test Button story
    `,
  },
  decorators: [
    Story => {
      return (
        <View style={{flexDirection: 'row', flexShrink: 1}}>
          <Story />
          <View style={{flex: 1}} />
        </View>
      );
    },
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DisabledButton: Story = {
  args: {
    text: 'DISABLED',
    isDisable: true,
  },
};

export const StyledButton: Story = {
  args: {
    text: 'STYLED',
    style: {margin: 50}
  },
};