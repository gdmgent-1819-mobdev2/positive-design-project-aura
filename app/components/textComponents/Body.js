import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'left',
  }
})

const SubTitle = ({text}) => (
  <Text style={style.subtitle}>{ text }</Text>
)

export default SubTitle
