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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width : 24,
    height : 24,
  },
});
