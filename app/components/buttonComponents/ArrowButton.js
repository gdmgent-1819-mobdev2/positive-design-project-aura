import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 15,
    height: 30
  }
});

export default class ArrowButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={style.container}>
        <Image
          source={require("../../assets/icons/arrow-back.png")}
          fadeDuration={0}
          style={style.icon}
        />
      </TouchableOpacity>
    );
  }
}
