import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'red'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'green'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'gray'}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
  },
});
