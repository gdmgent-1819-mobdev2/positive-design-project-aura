import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { LinearGradient } from 'expo'
import TaskContainer from '../components/TaskContainer'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { ArrowButton } from '../components/buttonComponents/'

import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
  container: {
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
});

class TaskScreen extends Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here */}
        <View style={styles.textContainer}>
          <Title style={styles.test} text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />

        </View>
        <ArrowButton text={'Arrow'}/>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Home')}
        />
        <TaskContainer />
        <View style={styles.navContainer}>
          <Navigation route={() => this.props.navigation.push('Home')} />
        </View>
      </LinearGradient>
    );
  }
}

export default TaskScreen
