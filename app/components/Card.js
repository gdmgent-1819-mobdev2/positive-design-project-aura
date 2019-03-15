import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: '100%',
    backgroundColor: '#48efbe',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 10,
    marginRight: 10,
  }
})

const Card = ({text, route, navigation}) => (
  <TouchableNativeFeedback  onPress={() => {navigation(route)}}> 
    <View style={styles.card}>
      <Text>Card emoji</Text>
      <Text>{text}</Text>
    </View>
  </TouchableNativeFeedback>
)

export default withNavigation(Card)
