import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import ScreenHome from './Screen/Home';
import ScreenAbout from './Screen/About';
import ScreenLogin from './Screen/Login';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: ScreenHome},
    About: {screen: ScreenAbout},
    Login: ScreenLogin
  },
  {
    initialRouteName: 'Home'
  }
);

export default AppNavigator;