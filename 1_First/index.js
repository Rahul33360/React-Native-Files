/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';     // first time create when learning
import App from './App2';    // second practice

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
