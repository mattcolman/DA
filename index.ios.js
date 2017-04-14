/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './src/Home';
import Questions from './src/Questions';

export default class DrugAlert extends Component {

  handleClick = () => {
    console.log('click!')
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home}/>
          <Route path="/questions" component={Questions}/>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
});

AppRegistry.registerComponent('DrugAlert', () => DrugAlert);
