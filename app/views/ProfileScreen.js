import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import {
  Title,
  SubTitle,
  SecondarySubtitle
} from "../components/textComponents/";
import {
  exellentCardGradient,
  okayCardGradient,
  stressGradient,
  anxiousGradient,
  exhaustedGradient,
  negativeGrey
} from "../utils/styles";
import { Logo } from "../components/textComponents/";
import { PrimaryButton } from "../components/buttonComponents/";
import { darkPurple, midPurple, backGradient, grey } from "../utils/styles/";
import { getInstance } from "../services/firebase/firebase";

const firebase = getInstance();

import ToggleSwitch from "toggle-switch-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  wrapper: {
    width: "80%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%"
  },
  section_wrapper: {
    flex: 1,
    height: "auto",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  section_container: {
    flex: 1,
    height: 100,
    width: "100%",
    backgroundColor: midPurple,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 10,
    padding: 20
  },
  loginBtn: {
    fontSize: 24,
    fontWeight: "400",
    backgroundColor: "#F50097",
    minWidth: 180,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 22,
    marginTop: 20
  },
  btnText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#ffffff",
    textAlign: "center"
  },
  logo: {
    flex: 1,
    justifyContent: "center"
  },
  toggleSwitch: {
    marginTop: 7,
    marginBottom: 7,
    justifyContent: "center"
  }
});

class ProfileScreen extends Component {
  state = {
    darkMode: true,
    notification: true
  };

  signOutUser = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          this.props.navigation.navigate("Login");
          console.log("Navigate succesful");
        });
    } catch (e) {
      console.log(e);
    }
  };
  

  toggleNotification = async () => {
    const currentUserId = firebase.auth().currentUser.uid;
    const ref = firebase
      .database()
      .ref("users/" + currentUserId + "/notification");

    const snapshot = await ref.once("value");
    if (snapshot) {
      this.setState({ notification: false });
      console.log(this.state.notification);
      ref.set(false);
      console.log(snapshot)
    } else {
      this.setState({ notification: true });
      console.log(this.state.notification);
      ref.set(true);
    }
  };
  


  render() {
    return (
      <LinearGradient colors={backGradient} style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.section_wrapper}>
            <Title text={"PROFILE"} />
            <View style={styles.section_container}>
              <SubTitle text={"User Name"} />
              <SecondarySubtitle text={"Last session 6 hours ago"} />
            </View>
          </View>
          <View style={styles.section_wrapper}>
            <Title text={"SETTINGS"} />
            <View style={styles.section_container}>
              <View style={styles.toggleSwitch}>
                <ToggleSwitch
                  isOn={this.state.darkMode}
                  onColor="#F50097"
                  offColor={grey}
                  label="Dark mode"
                  labelStyle={{
                    color: "white",
                    fontWeight: "300",
                    fontSize: 20,
                    paddingRight: "30%",
                    width: 180
                  }}
                  size="medium"
                  onToggle={() =>
                    this.state.darkMode
                      ? this.setState({ darkMode: false })
                      : this.setState({ darkMode: true })
                  }
                />
              </View>
              <View style={styles.toggleSwitch}>
                <ToggleSwitch
                  isOn={this.state.notification}
                  onColor="#F50097"
                  offColor={grey}
                  label="Notification"
                  labelStyle={{
                    color: "white",
                    fontWeight: "300",
                    fontSize: 20,
                    paddingRight: "30%",
                    width: 180
                  }}
                  size="medium"
                  onToggle={() => {
                    this.toggleNotification();
                  }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.signOutUser();
            }}
          >
            <Text style={styles.btnText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export default ProfileScreen;
