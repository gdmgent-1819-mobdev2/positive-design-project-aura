import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#ffffff',
        opacity: 0.9,
        height: 40,
        width: '100%',
        borderRadius: 20,
        paddingLeft: 10,
        marginTop: 10
    }
  })

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Typ info here' };
  }

  render() {
    return (
      <TextInput
        style={styles.inputField}
        placeholder=''
      />
    );
  }
}

export default UserInfo

