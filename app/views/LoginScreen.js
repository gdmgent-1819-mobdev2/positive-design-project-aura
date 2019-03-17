import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
    SecondaryButton,
    PrimaryButton
} from "../components/buttonComponents/";
import { SecondarySubtitle } from "../components/textComponents/";
import { Logo } from "../components/textComponents/";
import { UserInfo } from "../components/fieldComponents/";

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
    }
});

class LoginScreen extends Component {
    render() {
        _signInAsync = async () => {
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        };
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
                    <UserInfo />
                    <UserInfo />
                </View>
                <View>
                    <PrimaryButton text={"Login"} route={"App"} navigation={this.props.navigation.navigate} />
                    <SecondaryButton text={"Register"} route={"Register"} />
                </View>
            </View>
        );
    }
}

export default LoginScreen;
