import React, { Component } from 'react'
import { View } from 'react-native'
import { Body } from './textComponents/'
import { getInstance } from '../services/firebase/firebase'

const firebase = getInstance()

// Gets the object with exercises of desired type, picks a random one to display
const getRandomFromObject = (object) => {
  const keys = Object.keys(object)
  const value = Math.floor(Math.random()*keys.length)
  return object[keys[value]]
}

export class ExerciseDetail extends Component {
  // Sets state to default state
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      type: this.props.type,
    }
  }

  // Once component mounts, this will fetch data from firebase and prepare state for display
  componentDidMount() {
    if(firebase) {
      if(this.state.type !== 'chatbot') {
        const db = firebase.database()
        db.ref(`/exercises/${this.state.type}`).once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          const exercise = getRandomFromObject(data)
          this.setState({
            loading: false,
            exercise: exercise,
          })
        })
        .catch(error => this.setState({
          loading: false,
          error: error
        }))
      } else {
        this.setState({
          loading: false,
          exercise: {
            author: 'Remi the chatbot',
            quote_text: 'I\'m so sorry. Maybe we can chat soon!'
          }
        })
      }
    }
  }
  render() {
    
    if(!this.state.loading) {
      if(this.state.type === 'quote' || this.state.type === 'chatbot') {
        return (
          <View>
            <Body text={this.state.exercise.text} />
            <Body text={this.state.exercise.from} />
          </View>
        )
      } else {
        return (
          <View>
            <Body text={this.state.exercise.title} />
            <Body text={this.state.exercise.steps} />
          </View>
        )
      }
    } else if(this.state.loading && this.state.error) {
      return (
        <View>
          <Body text={'Oops!'} />
          <Body text={this.state.error} />
        </View>
      )
    } else {
      return (
        <View>
          <Body text={'loading...'} />
        </View>
      )
    }
  }
}

export default ExerciseDetail
