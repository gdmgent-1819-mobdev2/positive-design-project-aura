import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import Card from './Card'

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    maxHeight: '30%',
    overflow: 'scroll',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
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
