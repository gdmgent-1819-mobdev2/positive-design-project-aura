import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
    taskCard: {
        width: '100%',
        height: '100%',
        //backgroundColor: '#48efbe',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 5,
    },
    container: {
        width: 125,
        height: 125,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginTop: 10,
        marginBottom: 10,

    }
})

const TaskCard = ({ text, gradient }) => (
    <TouchableOpacity>
        <LinearGradient colors={gradient} style={styles.container}>
            <View style={styles.taskCard}>
                <Text>{text}</Text>
            </View>
        </LinearGradient>
    </TouchableOpacity>
)

export default TaskCard
