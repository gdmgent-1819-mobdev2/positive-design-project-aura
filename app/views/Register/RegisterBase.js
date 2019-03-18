import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { SubTitle, SecondarySubtitle, Logo, Body } from '../../components/textComponents';
import { SecondaryButton, PrimaryButton } from '../../components/buttonComponents';

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2B1576"
  },
  horizontalButtons: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    height: 40,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 10
  },
  fullWidth: {
    width: '100%',
  }
})

export class RegisterBase extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Logo />
          <SecondarySubtitle text={'As a first stap towards your account, we will need your email address and password'} />
        </View>
        <View style={styles.fullWidth}>
          <TextInput 
            style={styles.inputField} 
            placeholder={'E-mail'}
            keyboardType={'email-address'}
          />
          <TextInput 
            style={styles.inputField} 
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <TextInput 
            style={styles.inputField} 
            placeholder={'Confirm Password'}
            secureTextEntry={true}
          />
        </View>
        <View>
          <SecondaryButton text={'Cancel'} route={'Login'} navigation={this.props.navigation.navigate} />
          <PrimaryButton text={'Next'} route={''} navigation={this.props.navigation.navigate} />
        </View>
      </View>
    )
  }
}

export default RegisterBase
