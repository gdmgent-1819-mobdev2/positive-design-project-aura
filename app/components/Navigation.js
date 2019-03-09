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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
<<<<<<< HEAD
    // profile: {
    //     backgroundImage: `url(${Profile})`
    // }
=======

    text: {
        color: 'white',
    }
>>>>>>> bcce26453f3bb2888a244b4592d9d5fc80c5be7b
})

const Navigation = () => (
    <View style={styles.nav}>
<<<<<<< HEAD
        <Image></Image>
        <Image source={require('../../../images/icons/navigation/profile.svg')}></Image>
        <Image></Image>
=======

        <NavigationItem itemName='user' />
        <NavigationItem itemName='home' />
        <NavigationItem itemName='statistic' />

>>>>>>> bcce26453f3bb2888a244b4592d9d5fc80c5be7b
    </View>
)

export default Navigation