import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import { highLight, mainTextColor, stressGradient } from '../utils/styles'

const styles = StyleSheet.create({
    taskcard: {
        width: 140,
        height: 140,
        //backgroundColor: '#48efbe',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 5,
    },
    container: {
        width: 140,
        height: 140,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    }
})

const TaskCard = ({ text, gradient }) => (
    <LinearGradient colors={gradient} style={styles.container}>
        <View style={styles.taskcard}>


            <Text>{text}</Text>
        </View>
    </LinearGradient>
)

export default TaskCard
