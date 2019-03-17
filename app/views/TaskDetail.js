import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import TaskCard from '../components/TaskCard'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient } from '../utils/styles'
import { SubTitle, Body } from '../components/textComponents/'
import { ArrowButton, DoneButton } from '../components/buttonComponents/'

import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '100%',
    marginBottom: 40,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: 'auto',
  },
  buttons: {
    marginBottom: '2%'
  }
});

class TaskDetail extends Component {
  render() {
    const { navigation } = this.props
    const type = navigation.getParam('type', 'no Type')
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        <View style={styles.textContainer}>
          <ArrowButton />
          <SubTitle text={'Exercise type'} />
          <Body text={'Here is an exercise to get you started.'}/>
        </View>
        <View>
          <Body text={'Task Detail Component comes here'}/>
        </View>
        <View style={styles.buttons}>
          <DoneButton text={'Finish exercises'} navigation={navigation.navigate} />
        </View>
      </LinearGradient>
    )
  }
}

export default TaskDetail