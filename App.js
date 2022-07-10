import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from './src/screens/list';
import Create from './src/screens/create';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={List} name="Todos" />
        <Stack.Screen component={Create} name="Create" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
