import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import CardContainer from './CardContainer'
import { Title, SubTitle } from './textComponents/'
import { backGradient } from '../utils/styles/Colors'
import Navigation from './Navigation'
import NavigationItem from './NavigationItem'

import { LinearGradient } from 'expo'
import TaskContainer from './TaskContainer'

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
  test: {
    color: 'yellow',
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here */}
        <View style={styles.textContainer}>
          <Title style={styles.test} text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />

        </View>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
        <TaskContainer />
        <Navigation route={() => this.props.navigation.push('Details')} />
      </LinearGradient>
    );
  }
}

class TaskScreen extends React.Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here */}
        <View style={styles.textContainer}>
          <Title text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />

        </View>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
        <CardContainer />
        <Navigation />
      </LinearGradient>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: TaskScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export class Main extends Component {
  // render() {
  //   return (
  //     <LinearGradient colors={backGradient} style={styles.container}>
  //       {/* Insert top text here */}
  //       <View style={styles.textContainer}>
  //         <Title text={'Welcome, User'} />
  //         <SubTitle text={'How are you feeling today?'} />

  //       </View>
  //       <Button
  //         title="Go to Details"
  //         onPress={() => this.props.navigation.navigate('Details')}
  //       />
  //       <TaskContainer />
  //       <Navigation />

  //     </LinearGradient>

  //   )
  // }

  render() {
    return (
      <AppContainer />


    )

  }
}

export default Main
