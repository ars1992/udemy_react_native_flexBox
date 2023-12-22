import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', height: 150, backgroundColor: 'blue' }} />
        <View style={{ width: '80%', height: 150, backgroundColor: 'red' }} />
        <View style={{ width: '60%', height: 150, backgroundColor: 'green' }} />
        <View style={{ width: '40%', height: 150, backgroundColor: 'gray' }}>
          <View style={{ width: '60%', height: '60%', backgroundColor: 'darkgreen' }} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
  },
});
