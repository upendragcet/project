import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RandomNumber from '../components/RandomNumber';
export default class Game extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.game}`
  });

  shouldComponentUpdate = (nextProps, nextState) => {
    
  }

  state = {
    selectedNumbers: []
  }

  isNumberSelected = (numIndex) => {
    return this.state.selectedNumbers.indexOf(numIndex) >= 0;
  }

  selectNumber = (numIndex) => {
    this.setState((prevState) => ({
      selectedNumbers: [...prevState.selectedNumbers, numIndex]
    }));
  }

  render() {
    const { randomNumbersCount } = this.props.navigation.state.params;
    let randomNumbers = Array.from({ length: randomNumbersCount }).map(() => 1 + Math.floor(40 * Math.random()))
    let target = randomNumbers.slice(0, randomNumbersCount -2).reduce((acc, num) => acc + num, 0);
    return(
      <View style={styles.container}>
        <Text style={styles.target}>{target}</Text>
        <View style={styles.randomContainer}>
          { randomNumbers.map((num, index) => (
            <RandomNumber
              key={index}
              id={index}
              isDisabled={this.isNumberSelected(index)}
              number={num}
              onPress={this.selectNumber}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ddd',
  },
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});