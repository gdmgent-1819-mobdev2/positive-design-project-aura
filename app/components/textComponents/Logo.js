import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
  },
  icon: {
    width: 100,
    height: 40,
    marginBottom: 20,
    marginTop: 10,
  }
});

class Logo extends React.Component {
  render() {
    return (
      <View style={style.container} >
        <Image
          source={require("../../assets/icons/logo/logo.png")}
          fadeDuration={0}
          style={style.icon}
        />
      </View>
    );
  }
}

export default Logo
