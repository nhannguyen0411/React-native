import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import Home from './Screen/Home';
import About from './Screen/About';
import Login from './Screen/Login';
import Category from './Screen/Category';
import Categories from './Screen/Categories';
import Cart from './Screen/Cart';
import Settings from './Screen/Settings';
import Orders from './Screen/Orders';
const CategoryStack = createStackNavigator(
  {
    Categories,
    Category,
  },
  {
    initialRouteName: 'Categories'
  }
);
CategoryStack.navigationOptions = {
  tabBarLabel: 'Shopping',
  tabBarIcon: () => (
    <Icon name='ios-apps' type='ionicon' size={24} />
  )
}

const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: () => (
    <Icon name='ios-cart' type='ionicon' size={24} />
  )
}

const SettingStack = createStackNavigator({ Settings });
SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: () => (
    <Icon name='ios-settings' type='ionicon' size={24} />
  )
}

const OrderStack = createStackNavigator({ Orders })
OrderStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: () => (
    <Icon name='ios-albums' type='ionicon' size={24} />
  )
}

const AppNavigator = createBottomTabNavigator(
  {
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
  }
)

export default AppNavigator;