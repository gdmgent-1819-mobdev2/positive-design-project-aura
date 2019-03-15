import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import TaskScreen from '../views/TaskScreen'
import HomeScreen from '../views/HomeScreen'
import ProfileScreen from '../views/ProfileScreen'
import StatisticScreen from '../views/StatisticScreen'
import { Ionicons } from '@expo/vector-icons' // 6.2.2
import { Text, View, StyleSheet } from 'react-native';
import { highLight } from '../utils/styles/'
import { getTabBarIcon } from '../components/IconWithBadge'

const styles = StyleSheet.create({
  nav: {
    width: '90%',
    maxHeight: 70,
    height: 70,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#2B1576',
    alignItems: 'center',
    // Position en bottom weggelaten om flex zijn werk te laten doen
    // position: 'absolute',
    // bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  text: {
    color: 'white',
  },
  tab: {
    backgroundColor: 'red',
  },
  label: {
    backgroundColor: 'green',
  }

})


const TabNavigator = createBottomTabNavigator(
  {
    'Profile': { screen: ProfileScreen },
    Home: { screen: HomeScreen },
    'Statistic': { screen: StatisticScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: highLight,
      inactiveTintColor: 'white',
      style: styles.nav,
    },
    initialRouteName: 'Home',
  }
)
const AppNavigator = createStackNavigator({
  Details: {
    screen: TaskScreen,
  },
  Home: {
    screen: HomeScreen
  }
},
  {
    initialRouteName: 'Details',
    headerMode: 'none',
  })

export default createAppContainer(TabNavigator)

