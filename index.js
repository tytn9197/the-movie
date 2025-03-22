import './gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

let AppEntryPoint = App;

// Uncomment below line to use Storybook
// AppEntryPoint = require('./.storybook').default;

AppRegistry.registerComponent(appName, () => AppEntryPoint);
