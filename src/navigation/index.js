import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import MyTabs from './top'
import Calling from '../components/calling'
import Account from '../components/account'
import About from '../components/about'

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Calling" component={Calling} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
export default MyStack