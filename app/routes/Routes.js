import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import TaskScreen from '../views/TaskScreen'
import HomeScreen from '../views/HomeScreen'
import ProfileScreen from '../views/ProfileScreen'
import StatisticScreen from '../views/StatisticScreen'
import { Ionicons } from '@expo/vector-icons' // 6.2.2
import { Text, View, StyleSheet } from 'react-native';
import { highLight } from '../utils/styles/'


const styles = StyleSheet.create({
  nav: {
    width: '90%',
    maxHeight: 70,
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

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Profile') {
    iconName = `ios-person`;
  } else if (routeName === 'Statistic') {
    iconName = `ios-stats`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={35} color={tintColor} />;
};

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


      labelStyle: styles.label,
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

