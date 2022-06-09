import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouteApp from './src/navigation/'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <NavigationContainer>
          <RouteApp />
        </NavigationContainer>
      </View>
    );
  }
}

export default App;
