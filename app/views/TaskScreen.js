import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { LinearGradient } from 'expo'
import TaskCard from '../components/TaskCard'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { ArrowButton } from '../components/buttonComponents/'

import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '100%',
    marginBottom: 40,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: 'auto',
  },
  navContainer: {
    width: '90%',
    maxHeight: 70,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#2B1576',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  taskContainer: {
    maxWidth: '80%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

class TaskScreen extends Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here
        <View style={styles.textContainer}>
          <ArrowButton text={'Arrow'}/>
          <Title style={styles.test} text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />
        </View>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Home')}
        />
        <TaskContainer />
        <View style={styles.navContainer}>
          <Navigation route={() => this.props.navigation.push('Home')} />
        </View> */}
        <View style={styles.textContainer}>
          <ArrowButton />
          <SubTitle text={'Now we know how you feel, let\'s do something!'} />
        </View>
        <View style={styles.taskContainer}>
          <TaskCard text='Excercise' gradient={okayCardGradient} />
          <TaskCard text='Mind' gradient={stressGradient} />
          <TaskCard text='Chat' gradient={exellentCardGradient} />
          <TaskCard text='Quote' gradient={anxiousGradient} />
        </View>
      </LinearGradient>
    );
  }
}

export default TaskScreen
