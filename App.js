<script src="http://localhost:8097"></script>
import React from 'react';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'https://jy5qp.sse.codesandbox.io';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}