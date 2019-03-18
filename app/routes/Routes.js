import React, { Component } from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import TaskScreen from '../views/TaskScreen'
import HomeScreen from '../views/HomeScreen'
import ProfileScreen from '../views/ProfileScreen'
import StatisticScreen from '../views/StatisticScreen'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import TaskDetail from '../views/TaskDetail'
import { Ionicons } from '@expo/vector-icons' // 6.2.2
import { Text, View, StyleSheet } from 'react-native';
import { highLight } from '../utils/styles/'
import { getTabBarIcon } from '../components/IconWithBadge'
import { RegisterBase } from '../views/Register/'

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
  },
  TaskDetail: {
    screen: TaskDetail,
  }
}, {

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
      showLabel: false,

    },
    initialRouteName: 'Home',
  }
)

const RegisterStack = createStackNavigator({
  'Base': {
    screen: RegisterBase,
  }
}, {
  initialRouteName: 'Base',
  headerMode: 'none',
})


const AuthStack = createStackNavigator({ 'LogIn': LoginScreen });

const switchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Register: RegisterStack,
    App: TabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Login',
  }

)



export default createAppContainer(switchNavigator)

