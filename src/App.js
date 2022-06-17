// In App.js in a new project

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      import('./config/reactotronConfig').then(() =>
        console.log('Reactotron Configured'),
      );
    }
  }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
