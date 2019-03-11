import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: '400',
    backgroundColor: '#F50097',
    minWidth: 180,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 22,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',  
}
})

const NextExerciseButton = ({text}) => (
    <View style={style.container}>
        <Text style={style.text}>{ text }</Text>
    </View>
)

export default NextExerciseButton
