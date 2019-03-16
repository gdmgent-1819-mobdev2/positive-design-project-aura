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
        <TaskCard gradient={okayCardGradient} image={require("../assets/icons/exercise/fysical.png")}/>
        <TaskCard gradient={stressGradient} image={require("../assets/icons/exercise/mindful.png")}/>
        <TaskCard gradient={exellentCardGradient} image={require("../assets/icons/exercise/remiChatbot.png")}/>
        <TaskCard gradient={anxiousGradient} image={require("../assets/icons/exercise/quotes.png")}/>
    </View>
)

export default TaskContainer
