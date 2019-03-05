import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    minWidth: '80%',
    maxHeight: '20%',
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

const Card = ({text}) => (
  <View style={styles.card}>
      <Text>Card emoji</Text>
      <Text>{text}</Text>
  </View>
)

export default Card
