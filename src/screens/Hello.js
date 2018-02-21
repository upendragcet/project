import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Greeting from '../components/Greeting';

export default class Hello extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.current_user.name}`
  });

  render(){
    const {name} = this.props.navigation.state.params.current_user;
    return(
      <View>
        <Text>Hello {name}</Text>
        <Greeting name={name}/>
      </View>
    );
  }
}
