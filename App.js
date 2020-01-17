<script src="http://localhost:8097"></script>
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import Category from './Screen/Category';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    // <AppContainer />
    <Category />
  );
}