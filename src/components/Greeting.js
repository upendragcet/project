import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
export default class Greeting extends Component {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    const { name } = this.props;
    return(
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>{name}</Text>
      </View>
    );
  }
}