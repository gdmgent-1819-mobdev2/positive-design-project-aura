import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: '400',
    backgroundColor: '#ffffff',
    opacity: 0.5,
    minWidth: 180,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 22,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  }
})

const DoneButton = ({text, navigation}) => (
    <TouchableOpacity onPress={() => {navigation('Home')}} style={style.container}>
      <Text style={style.text}>{ text }</Text>
    </TouchableOpacity>
)

export default DoneButton
