import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'

import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        width: '100%',
        marginBottom: 40,
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        height: 'auto',
    },
    navContainer: {
        width: '90%',
        maxHeight: 70,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        backgroundColor: '#2B1576',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cardContainer: {
        maxHeight: '40%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    temp: {
        color: 'white',
        fontSize: 25,
    }
});

class LoginScreen extends Component {
    state = {}
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    render() {
        return (
            <LinearGradient colors={backGradient} style={styles.container}>
                {/* Insert top text here */}
                <View style={styles.textContainer}>
                    <Title text={'Welcome, User'} />
                    <SubTitle text={'Please Sign In '} />
                    <Text style={styles.temp} onPress={this._signInAsync} >LOG IN HERE</Text>
                </View>
                <View style={styles.cardContainer}>

                </View>

            </LinearGradient>
        );
    }
}

export default LoginScreen;