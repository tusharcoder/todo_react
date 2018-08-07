import React from 'react';
import {View, Text, Image, StyleSheet, Picker} from 'react-native';
import {Header, Left, Body, Right, Title, Container, Icon} from 'native-base';
import ActionButton from 'react-native-action-button';

require('./style.js');
export class Home extends React.Component{
  state={
    isReady: false
  }

static navigationOptions = {
  drawerLabel : 'Home',
  drawerIcon : ()=><Image source={require('./images/home_icon.jpg')} style={[styles.image]}/>
};
render(){
  if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
return(
  <Container style={styles.container}>
  <Header>
    <Left>
      <Icon name='menu' style={styles.icon}/>
    </Left>
          <Body>
            <Picker
  selectedValue={this.state.list}
  style={{ height: 50, width: 100, color:'#fff', }}
  onValueChange={(itemValue, itemIndex) => this.setState({list: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
          </Body>
          <Right>
            <Icon name='search' style={styles.icon}/>
          </Right>
  </Header>
  <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
  </Container>
);
}
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}
}
