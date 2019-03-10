import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import TaskCard from './TaskCard'
import { highLight, mainTextColor, stressGradient, anxiousGradient, okayCardGradient, exellentCardGradient } from '../utils/styles'

const styles = StyleSheet.create({
    container: {

        maxWidth: '80%',
        maxHeight: 290,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',

        flexWrap: 'wrap',
    },
    task__excercise: {

    }
})

const TaskContainer = () => (
    <View style={styles.container}>
        <TaskCard text='Excercise' gradient={okayCardGradient} />
        <TaskCard text='Mind' gradient={stressGradient} />
        <TaskCard text='Chat' gradient={exellentCardGradient} />
        <TaskCard text='Quote' gradient={anxiousGradient} />
    </View>
)

export default TaskContainer
