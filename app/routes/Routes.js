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
    maxHeight: 70,
    height: 70,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#2B1576',
    alignItems: 'center',
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

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: TaskScreen,
  }
},{
  initialRouteName: 'Home',
  headerMode: 'none',
})

const TabNavigator = createBottomTabNavigator(
  {
    'Profile': { screen: ProfileScreen },
    'Home': { screen: HomeStack },
    'Statistic': { screen: StatisticScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    animationEnabled: 'true',
    tabBarOptions: {
      activeTintColor: highLight,
      inactiveTintColor: 'white',
      style: styles.nav,
      
    },
    initialRouteName: 'Home',
  }
)




export default createAppContainer(TabNavigator)

