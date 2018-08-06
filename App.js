import React from 'react';
import {Home} from './home';
import {AddList} from './addlist';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

export default App = createDrawerNavigator({
  Home: {
    screen: Home ,
  },
  AddList: {
    screen: AddList,
  },
});
