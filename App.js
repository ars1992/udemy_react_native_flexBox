import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
          <View style={{ flex: 0.5, backgroundColor: 'darkgreen' }} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});
