import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
require('./style.js')
export class AddList extends React.Component {
  static navigationOptions = {
    drawerLabel : 'Add List',
    drawerIcon : ()=><Image source={require('./images/chats_icon.png')} style={[styles.image]}/>
  };
  render() {
    return (
      <View style={styles.display}>
        <Text>Add Task List</Text>
      </View>
    );
  }
}
