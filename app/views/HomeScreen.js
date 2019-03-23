import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient, Permissions, Notifications } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle, Body } from '../components/textComponents/'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import { getInstance } from '../services/firebase/firebase'
import { PrimaryButton } from '../components/buttonComponents'

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

const firebase = getInstance()

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      allowEmotion: false
    }
  }

  getHoursFromDate = (timestamp) => {
    return timestamp / 3600000
  }

  registerNotifications = async() => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalStatus = status
    if(status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalStatus = status
    }

    if(finalStatus !== 'granted') {
      return
    }
    console.log('getting token')
    let token = await Notifications.getExpoPushTokenAsync()
    console.log(token)
  }

  checkTime = async() => {
    if(firebase) {
      const uid = firebase.auth().currentUser.uid
      const db = firebase.database()
      const ref = await db.ref(`/users/${uid}`).once('value')
      const refvalue = ref.val()
      const lastTimestamp = refvalue.lastAddTimestamp
      const now = new Date()
      const currentTimestampHours = this.getHoursFromDate(now.getTime())
      const lastTimeStampHours = this.getHoursFromDate(lastTimestamp)
      if((currentTimestampHours - lastTimeStampHours) < 1) {
        this.setState({
          loading: false,
          allowEmotion: false,
        })
      } else {
        this.setState({
          loading: false,
          allowEmotion: true,
        })
      }
    } else {
      this.setState({
        loading: false,
        allowEmotion: false,
      })
    }
  }

  componentDidMount() {
    this.checkTime()
    setInterval(() => {
      this.checkTime()
    }, 300000)
    // this.registerNotifications()
  }

  render() {
    if(this.state.loading === true) {
      return (
        <LinearGradient colors={backGradient} style={styles.container}>
          <View style={styles.textContainer}>
            <Title text={'Welcome, User'} />
            <SubTitle text={'How are you feeling today?'} />
  
          </View>
          <View style={styles.cardContainer}>
            <Body text={'loading...'} />
          </View>
        </LinearGradient>
      )
    } else {
      if(this.state.allowEmotion === false) {
        return (
          <LinearGradient colors={backGradient} style={styles.container}>
            <View style={styles.textContainer}>
              <Title text={'Welcome, User'} />
              <SubTitle text={'How are you feeling today?'} />
    
            </View>
            <View style={styles.container}>
              <Body text={'You have already checked in for this hour. You can go to the exercises or check back later.'} />
              <PrimaryButton text={'Go to exercises'} route={'Details'} navigation={this.props.navigation.navigate} />
            </View>
          </LinearGradient>
        )
      } else {
        return (
          <LinearGradient colors={backGradient} style={styles.container}>
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
  }
}

export default HomeScreen
