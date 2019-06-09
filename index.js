//  Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import PrintControl from './src/components/PrintControl';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Eatable'} />
    <PrintControl />
  </View>

);


// Render it to the device
AppRegistry.registerComponent('test_printer', () => App);
