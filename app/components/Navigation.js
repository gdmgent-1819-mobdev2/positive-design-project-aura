import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'



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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    }
})

const Navigation = () => (
    <View style={styles.nav}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
    </View>
)

export default Navigation