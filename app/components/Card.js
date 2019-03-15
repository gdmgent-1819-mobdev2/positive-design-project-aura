import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
  card: {
    width: '100%',
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
  cardStyle: {
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
  }
})

const Card = ({text, route, navigation, colorBase}) => (
  <TouchableOpacity style={styles.cardStyle} onPress={() => {navigation(route)}}> 
    <LinearGradient style={styles.card} colors={colorBase}>
      <View>
        {/* <Image source= /> */}
        <Text>{text}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
)

export default Card
