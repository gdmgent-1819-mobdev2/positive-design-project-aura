import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
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
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  }
})

const Card = ({ text, route, navigation, colorBase, image }) => (
  <TouchableOpacity style={styles.cardStyle} onPress={() => { navigation(route) }}>
    <LinearGradient style={styles.card} colors={colorBase}>
      <View style={styles.view}>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
)

export default Card
