import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import { AppText } from './AppText';

const meta = {
  title: 'Atoms/AppText',
  component: AppText,
  argTypes: {},
  args: {
    text: 'Hello world',
  },
  parameters: {},
  decorators: [
    Story => {
      return (
        <View style={{flexDirection: 'row', flexShrink: 1, margin: 10}}>
          <Story />
          <View style={{flex: 1}} />
        </View>
      );
    },
  ],
} satisfies Meta<typeof AppText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello world',
  },
};

export const FontFamily: Story = {
  args: {
    weight: 900,
    size: 16,
    text: 'Hello world',
    color: '#000000',
  },
};