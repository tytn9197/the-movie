/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootNavigator from '#navigators/RootNavigator';
import {UnistylesRegistry} from 'react-native-unistyles';
import store, { persistor } from '#redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { THEMES_COLOR } from '#constants/THEMES_COLOR';


export type AppThemes = {
  light: typeof THEMES_COLOR.light;
  dark: typeof THEMES_COLOR.dark;
};

UnistylesRegistry.addThemes({
  light: THEMES_COLOR.light,
  dark: THEMES_COLOR.dark,
}).addConfig({
  initialTheme: 'light',
  adaptiveThemes: false,
});

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
