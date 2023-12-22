import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
        <View style={[styles.box, {height: 150, alignSelf: 'center', backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  box: {
    //height: 100,
    width: 100,
  }
});
