import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export class Home extends React.Component{
static navigationOptions = {
  drawerLabel : 'Home',
  drawerIcon : ()=><Image source={require('./images/home_icon.jpg')} style={[styles.icon]}/>
};
render(){
return(
  <View style={styles.display}>
    <Text>"Home Screen"</Text>
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
