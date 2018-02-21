import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class RandomNumber extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
  }

  handlePress = () => {
    this.props.onPress(this.props.id);
  }

  render(){
    const { number, isDisabled } = this.props;
    return(
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, isDisabled && styles.disabled]}>{number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center'
  },
  disabled: {
    opacity: 0.3
  }
});