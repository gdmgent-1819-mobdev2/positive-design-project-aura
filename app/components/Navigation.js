import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Card from './Card'

const styles = StyleSheet.create({
    nav: {
        width: '90%',
        height: 70,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    }
})

const Navigation = () => (
    <View style={styles.nav}>

    </View>
)

export default Navigation