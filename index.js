/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('com.footballteams.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.footballteams.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
