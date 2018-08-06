import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
export class AddList extends React.Component {
  static navigationOptions = {
    drawerLabel : 'Add List',
    drawerIcon : ()=><Image source={require('./images/chats_icon.png')} style={[styles.icon]}/>
  };
  render() {
    return (
      <View style={styles.display}>
        <Text>Add Task List</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icon:{
    width : 24,
    height : 24,
  },
  display:{
    flex : 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});
