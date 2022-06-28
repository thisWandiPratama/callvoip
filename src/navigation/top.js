import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Dial from "../containers/dial"
import Recent from '../containers/recent'
import Contact from '../containers/contact'
import Record from '../containers/record'
import Setting from '../containers/setting'

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dial" component={Dial} />
      <Tab.Screen name="Recent" component={Recent} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Record" component={Record} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default MyTabs