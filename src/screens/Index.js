import React from 'react';
import {
  Animated,
  Easing
} from 'react-native';
import { addNavigationHelpers, NavigationActions, StackNavigator, TabNavigator } from 'react-navigation';
import Splash from './Splash';
import Hello from './Hello';
import Game from './Game';

var transitionConfig = () => ({
  transitionSpec: {
    duration: 300,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;

    const height = layout.initHeight;
    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    return { opacity, transform: [{translateX} ] };
  },
});

export const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Hello: {
    screen: Hello,
    navigationOptions: {
    },
  },
  Game: {
    screen: Game,
    navigationOptions: {
    },
  }
}, {
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: transitionConfig,
});
