<script src="http://localhost:8097"></script>
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { CartProvider } from './contexts/Cart';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
  );
}