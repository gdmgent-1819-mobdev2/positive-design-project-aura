import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'



const styles = StyleSheet.create({
    nav__item: {
        width: 50,
        height: 50,
        backgroundColor: 'green',

    }
})


//image base on argument
const NavigationItem = (props) => (

    <Image source={props.imageLink}></Image>

)

export default Navigation