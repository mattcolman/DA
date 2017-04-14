// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class Home extends Component {

  handleClick = () => {
    console.log('click!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Drug Alert!
        </Text>
        <Link
          to="/questions"
          underlayColor='#f0f4f7'>
            <Text style={styles.startButton}>
              Start
            </Text>
        </Link>
      </View>
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
  startButton: {
    color: 'red',
  },
});
