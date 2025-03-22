import type {Preview} from '@storybook/react';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      const [isDark, setIsDark] = useState(
        UnistylesRuntime.themeName === 'dark',
      );
      return (
        <SafeAreaView
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: isDark ? 'black' : 'white',
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'red', margin: 10}}
            onPress={() => {
              if (UnistylesRuntime.themeName === 'light') {
                UnistylesRuntime.setTheme('dark' as never);
              } else {
                UnistylesRuntime.setTheme('light' as never);
              }
              setIsDark(prev => !prev);
            }}>
            <Text>
              Change to{' '}
              {UnistylesRuntime.themeName === 'light' ? 'dark' : 'light'} Theme
            </Text>
          </TouchableOpacity>

          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </SafeAreaView>
      );
    },
  ],
};

export default preview;
