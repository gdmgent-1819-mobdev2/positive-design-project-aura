import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SecondaryButton, PrimaryButton } from "../components/buttonComponents";
import { SecondarySubtitle } from "../components/textComponents";
import { Logo } from "../components/textComponents";
import { UserInfo } from "../components/fieldComponents";

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
    alignItems: "center"
  },
  addTopMargin: {
    marginTop: 200
  },
  center: {
    textAlign: "center"
  }
});

class RegisterScreen extends Component {

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
        <UserInfo placeholder="First name"/>
        <UserInfo placeholder="Last name"/>
        <UserInfo placeholder="Age"/>
        <UserInfo placeholder="Email"/>
        <UserInfo placeholder="Password"/>
        <View style={"addTopMargin"}>
          <PrimaryButton text={"Register"}  />
					<SecondaryButton text={"Login"} route={'Login'} navigation={this.props.navigation.navigate} />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
