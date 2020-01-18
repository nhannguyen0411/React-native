<script src="http://localhost:8097"></script>
import React from 'react';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { CartProvider } from './contexts/Cart';
import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'https://jy5qp.sse.codesandbox.io';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
    
  );
}