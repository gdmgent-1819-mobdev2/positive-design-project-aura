import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#D8D4E3',
        opacity: 0.8,
        height: 40,
        width: '100%',
        borderRadius: 20,
        paddingLeft: 10
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
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export default UserInfo