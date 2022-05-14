/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';
import { TeamScreen } from './src/scene/TeamScreen/TeamScreen';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('TeamScreen', () => TeamScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});
