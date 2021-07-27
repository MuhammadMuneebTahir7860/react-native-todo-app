import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/config/store';
export default function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </PersistGate>
    </Provider>
  )
}