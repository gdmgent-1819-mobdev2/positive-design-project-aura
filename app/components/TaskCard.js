import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo";
import { highLight, mainTextColor, stressGradient } from "../utils/styles";

const styles = StyleSheet.create({
  taskcard: {
    width: 140,
    height: 140,
    //backgroundColor: '#48efbe',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 5
  },
  container: {
    width: 140,
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  icon: {
    width: 50,
    height: 50
  }
});

const TaskCard = ({ text, gradient, image }) => (
  <TouchableOpacity>
    <LinearGradient colors={gradient} style={styles.container}>
      <View style={styles.taskcard}>
        <Image
          source={image}
          fadeDuration={0}
          style={styles.icon}
        />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

export default TaskCard;
