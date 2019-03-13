import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'left',
    color: 'white'
  }
})

const Title = ({ text }) => (
  <Text style={style.title}>{text}</Text>
)

export default Title
