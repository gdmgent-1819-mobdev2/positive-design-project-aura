import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, AsyncStorage, Alert } from "react-native"
import { SecondaryButton } from "../components/buttonComponents/"
import { SecondarySubtitle } from "../components/textComponents/"
import { Logo } from "../components/textComponents/"
import { getInstance } from '../services/firebase/firebase'

const firebase = getInstance()

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B1576"
  },
  view: {
    width: "100%",
    height: "30%",
    alignItems: 'center'
  },
  userInfo: {
    marginTop: 50
  },
  center: {
    textAlign: "center"
  },
  loginBtn: {
    fontSize: 24,
    fontWeight: '400',
    backgroundColor: '#F50097',
    minWidth: 180,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 22,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    height: 40,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 10
  }
});

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: null,
      emailField: '',
      passField: '',
    }
  }

  loginUser = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true')
    const user = {
      email: this.state.emailField,
      pass: this.state.passField,
    }
    firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
      .then(() => {
        this.props.navigation.navigate('App')
      })
      .catch(error => {
        Alert.alert(error.code + ': ' + error.message)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Logo />
          <SecondarySubtitle
            text={"It is not the mountain we conquer but ourselves."}
            style={styles.center}
          />
        </View>
        <View style={styles.view}>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => { this.setState({ emailField: text }) }}
            placeholder={'E-mail'}
            autocomplete={'email'}
            keyboardType={'email-address'}

          />
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => { this.setState({ passField: text }) }}
            placeholder={'Password'}
            autocomplete={'password'}
            secureTextEntry={true}

          />
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => { this.loginUser() }} >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <SecondaryButton text={"Register"} route={"Register"} navigation={this.props.navigation.navigate} />
        </View>
      </View>
    );
  }

}

export default LoginScreen;
