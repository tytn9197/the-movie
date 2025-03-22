/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '#redux/store';
import RootNavigator from '#navigators/RootNavigator';
import {UnistylesRegistry} from 'react-native-unistyles';

const light = {
  bgDisabledButton: '#00000059',
  txtDisabledButton: '#FFFFFF59',
};
const dark = {
  bgDisabledButton: '#FFFFFF1A',
  txtDisabledButton: '#FFFFFF59',
};

export type AppThemes = {
  light: typeof light;
  dark: typeof dark;
};

UnistylesRegistry.addThemes({
  light,
  dark,
}).addConfig({
  initialTheme: 'light',
});

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
