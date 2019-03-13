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
  navContainer: {
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
  },
});

class HomeScreen extends React.Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>

        <View style={styles.textContainer}>
          <Title style={styles.test} text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />

        </View>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
        <TaskContainer />
        <View style={styles.navContainer}>
          <Navigation route={() => this.props.navigation.push('Details')} />
        </View>
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

  // state = {
  //   fontLoaded: false
  // }
  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     'font-awesome': 'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
  //   });

  //   this.setState({ fontLoaded: true });
  // }



  // render() {
  //   // if (!this.state.fontLoaded) { return null; }
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
