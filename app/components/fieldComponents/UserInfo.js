import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    height: 40,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 10
  }, view: {
    width: '100%'
  }
})


const UserInfo = ({ placeholder }) => (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
    />
);

export default UserInfo


