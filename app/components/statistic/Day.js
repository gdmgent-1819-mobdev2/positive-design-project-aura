import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import {
    exellentCardGradient, okayCardGradient, stressGradient,
    anxiousGradient, exhaustedGradient
} from '../../utils/styles'


const styles = StyleSheet.create({

    day: {
        width: 20,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: 'transparent',

    },
    text: {
        position: 'absolute',
        bottom: -70,
    }

})

/**
 * 
 * @param {averageEmotion} Number from 1 to 10
 */

const Day = ({ averageEmotion }) => {


    let gradientColor = [];
    if (averageEmotion < 40) {
        gradientColor = exhaustedGradient;
    } else if (averageEmotion > 40 && averageEmotion <= 80) {
        gradientColor = anxiousGradient
    } else if (averageEmotion > 80 && averageEmotion <= 120) {
        gradientColor = stressGradient
    } else if (averageEmotion > 120 && averageEmotion <= 160) {
        gradientColor = okayCardGradient
    } else if (averageEmotion > 160 && averageEmotion <= 200) {
        gradientColor = exellentCardGradient
    }

    return (
        <LinearGradient style={[{ height: averageEmotion }, styles.day]} colors={gradientColor}>

        </LinearGradient>

    )

}

export default Day