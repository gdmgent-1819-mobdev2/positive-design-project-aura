import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
    SecondaryButton,
    PrimaryButton
} from "../components/buttonComponents/";
import { SecondarySubtitle } from "../components/textComponents/";
import { Logo } from "../components/textComponents/";
import { UserInfo } from "../components/fieldComponents/";
import { getInstance } from '../services/firebase/firebase'
import console = require("console");

const firebase = getInstance()

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

		constructor(props) {
			super(props)
			this.state = {
				loggedIn: false,
				user: null,
				fields: {
					email: '',
					password: '',
				}
			}
		}

		loginUser = () => {
			console.log('sign in bruh')
			const user = {
				email: this.state.email,
				pass: this.state.pass,
			}
			firebase.auth().signInWithEmailAndPassword(user.email, user.password)
				.then(() => {
					this.props.navigation.navigate('App')
				})
				.catch(() => {

				})
		}

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
                    <UserInfo placeholder={'Email'} onChangeText={(text) => this.setState({fields: {email: text}})} />
                    <UserInfo placeholder={'Password'} onChangeText={(text) => this.setState({fields: {password: text}})} />
                </View>
                <View>
                    {/* <PrimaryButton text={"Login"} route={"App"} navigation={this.props.navigation.navigate} onPress={this.loginUser()} /> */}
                    <PrimaryButton text={"Login"} funct={loginUser()} />
                    <SecondaryButton text={"Register"} route={"Register"} navigation={this.props.navigation.navigate} />
                </View>
            </View>
        );
    }

}

export default LoginScreen;
