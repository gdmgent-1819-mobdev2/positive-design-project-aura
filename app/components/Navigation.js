import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NavigationItem from './NavigationItem'


const styles = StyleSheet.create({
    nav: {
        width: '90%',
        maxHeight: 70,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        backgroundColor: '#2B1576',
        alignItems: 'center',
        // Position en bottom weggelaten om flex zijn werk te laten doen
        // position: 'absolute',
        // bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    text: {
        color: 'white',
    }
})

const Navigation = () => (
    <View style={styles.nav}>

        <NavigationItem itemName='user' />
        <NavigationItem itemName='home' />
        <NavigationItem itemName='statistic' />

    </View>
)

export default Navigation