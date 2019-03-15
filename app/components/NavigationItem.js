import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import profileImage from '../assets/icons/user.png'
import homeImage from '../assets/icons/home.png'

//https://www.flaticon.com/free-icon/home_263115#term=home&page=1&position=1



const styles = StyleSheet.create({
    nav__container: {

        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    nav__item: {
        width: 35,
        height: 35,
        resizeMode: 'contain'

    }
})


//image base on argument
const NavigationItem = ({ route, icon }) => {
    return (
        < TouchableOpacity onPress={route} >
            {/* <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} /> */}
        </TouchableOpacity >
    )

}
export default NavigationItem