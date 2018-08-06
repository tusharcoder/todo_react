import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
require('./style.js');
export class Home extends React.Component{
static navigationOptions = {
  drawerLabel : 'Home',
  drawerIcon : ()=><Image source={require('./images/home_icon.jpg')} style={[styles.icon]}/>
};
render(){
return(
  <View style={styles.display}>
    <Text>"Home View"</Text>
  </View>
);
}
}
