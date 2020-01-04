import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import ScreenHome from './Screen/ScreenHome';
import ScreenAbout from './Screen/ScreenAbout';

const AppNavigator = createStackNavigator({
  Home: {screen: ScreenHome},
  About: {screen: ScreenAbout}
});

export default AppNavigator;