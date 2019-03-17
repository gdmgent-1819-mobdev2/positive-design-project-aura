import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: 'lightgrey',
  }
})

const SecondarySubtitle = ({ text }) => (
  <Text style={style.subtitle}>{text}</Text>
)

export default SecondarySubtitle
