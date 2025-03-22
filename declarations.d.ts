import {AppThemes} from 'App';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesRuntime {
    setTheme(theme: 'light' | 'dark'): void; // Add other methods as needed
  }
}
