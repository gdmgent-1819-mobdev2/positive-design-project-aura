import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Card from './Card'

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    height: '40%',
    overflow: 'scroll',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  }
})

const CardContainer = () => (
  <View style={styles.container}>
    <Card text='Happy' />
    <Card text='Sad' />
    <Card text='Angry' />
  </View>
)

export default CardContainer
