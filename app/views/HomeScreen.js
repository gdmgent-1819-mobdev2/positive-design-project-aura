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
            <Card text={'Excellent'} value={100} route={'Details'} navigation={this.props.navigation.navigate} colorBase={exellentCardGradient} image={require("../assets/icons/card-emotes/excellent.png")}/>
            <Card text={'Okay'} value={75} route={'Details'} navigation={this.props.navigation.navigate} colorBase={okayCardGradient} image={require("../assets/icons/card-emotes/okay.png")}/>
            <Card text={'Stressed'} value={50} route={'Details'} navigation={this.props.navigation.navigate} colorBase={stressGradient} image={require("../assets/icons/card-emotes/stressed.png")}/>
            <Card text={'Exhausted'} value={25} route={'Details'} navigation={this.props.navigation.navigate} colorBase={anxiousGradient} image={require("../assets/icons/card-emotes/exhausted.png")}/>
            <Card text={'Anxious'} value={1} route={'Details'} navigation={this.props.navigation.navigate} colorBase={exhaustedGradient} image={require("../assets/icons/card-emotes/anxious.png")}/>
          </ScrollView>
        </View>

      </LinearGradient>
    );
  }
}

export default HomeScreen
