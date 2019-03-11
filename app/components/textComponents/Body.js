import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'left',
    color: '#ffffff',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  }
})

const SubTitle = ({text}) => (
  <Text style={style.subtitle}>{ text }</Text>
)
export default SubTitle