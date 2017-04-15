// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Home from './Home';
import Questions from './Questions';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: Home },
  Questions: { screen: Questions },
});

AppRegistry.registerComponent('DrugAlert', () => App);
