import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: '100%',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  cardInside: {
    textAlign: 'center',
  }
})

const Card = ({text, route, navigation, colorBase}) => (
  <TouchableNativeFeedback  onPress={() => {navigation(route)}}> 
    <LinearGradient colors={colorBase} style={styles.card}>
      <View styles={styles.cardInside}>
        {/* <Image source= /> */}
        <Text>{text}</Text>
      </View>
    </LinearGradient>
  </TouchableNativeFeedback>
)

export default Card
