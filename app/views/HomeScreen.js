import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'

import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
  container: {
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
  cardContainer: {
    maxHeight: '70%',
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
            <Card text={'Great'} route={'Details'} navigation={this.props.navigation.navigate} colorBase={exellentCardGradient} />
            <Card text={'Okay'} route={'Details'} navigation={this.props.navigation.navigate} colorBase={okayCardGradient} />
            <Card text={'Neutral'} route={'Details'} navigation={this.props.navigation.navigate} colorBase={stressGradient} />
            <Card text={'Anxious'} route={'Details'} navigation={this.props.navigation.navigate} colorBase={anxiousGradient} />
            <Card text={'Exhausted'} route={'Details'} navigation={this.props.navigation.navigate} colorBase={exhaustedGradient} />
          </ScrollView>
        </View>

      </LinearGradient>
    );
  }
}

export default HomeScreen
