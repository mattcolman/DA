// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class Questions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Question 1
        </Text>
        <Text style={styles.welcome}>
          Question 2
        </Text>
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
});
