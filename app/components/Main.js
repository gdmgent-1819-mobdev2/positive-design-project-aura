import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CardContainer from './CardContainer'
import { Title, SubTitle } from './textComponents/'
import { backGradient } from '../utils/styles/Colors'
import Navigation from './Navigation'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '100%',
    marginBottom: 40,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: 'auto',
  }
});

export class Main extends Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here */}
        <View style={styles.textContainer}>
          <Title text={'Welcome, User'}/>
          <SubTitle text={'How are you feeling today?'} />
        </View>
        <CardContainer />
        <Navigation />
      </LinearGradient>

    )
  }
}

export default Main
