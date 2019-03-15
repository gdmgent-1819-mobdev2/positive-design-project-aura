import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'

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
  cardContainer: {
    maxHeight: '40%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        {/* Insert top text here */}
        <View style={styles.textContainer}>
          <Title text={'Welcome, User'} />
          <SubTitle text={'How are you feeling today?'} />

        </View>
        <View style={styles.cardContainer}>
          <ScrollView horizontal={true}>
            <Card text={'Amazing'} route={'Details'} navigation={this.props.navigation.navigate} />
            <Card text={'Amazing'} route={'Details'} navigation={this.props.navigation.navigate} />
            <Card text={'Amazing'} route={'Details'} navigation={this.props.navigation.navigate} />
          </ScrollView>
        </View>
        <Navigation />
      </LinearGradient>
    );
  }
}

export default HomeScreen
