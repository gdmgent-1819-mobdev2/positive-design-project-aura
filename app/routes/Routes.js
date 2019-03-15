import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TaskScreen from '../views/TaskScreen'
import HomeScreen from '../views/HomeScreen'






const AppNavigator = createStackNavigator({
  Task: {
    screen: TaskScreen,
  },
  Home: {
    screen: HomeScreen
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  })


export default createAppContainer(AppNavigator)

