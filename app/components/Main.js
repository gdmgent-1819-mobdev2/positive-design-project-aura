import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CardContainer from './CardContainer'
import Navigation from './Navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welkom!</Text>
        <CardContainer />
        <Navigation />
      </View>

    )
  }
}

export default Main
