import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import ScreenHome from './Screen/ScreenHome';
import ScreenAbout from './Screen/ScreenAbout';
import ScreenLogin from './Screen/ScreenLogin';

const AppNavigator = createStackNavigator(
  {
  Home: {screen: ScreenHome},
  About: {screen: ScreenAbout},
  Login: ScreenLogin
  },
  {
    initialRouteName: 'Login'
  }
);

export default AppNavigator;