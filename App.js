import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from './src/screens/list';

function App() {
  const Stack = createStackNavigator();
  return <List />;
}

export default App;
