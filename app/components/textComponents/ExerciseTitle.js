import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  subtitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
  }
})

const ExerciseTitle = ({ text }) => (
  <Text style={style.subtitle}>{text}</Text>
)

export default ExerciseTitle
