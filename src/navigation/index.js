import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {MyTabs} from './top'
import Calling from '../components/calling'

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Calling" component={Calling} />
    </Stack.Navigator>
  );
}
export default MyStack