import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './src/index';
import { name as appName } from './app.json';

enableScreens();
AppRegistry.registerComponent(appName, () => App); 