import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle, SecondarySubtitle } from '../components/textComponents/'
import { exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import { Logo } from "../components/textComponents/";
import { PrimaryButton } from "../components/buttonComponents/";
import { midPurple } from "../utils/styles/"
import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    wrapper: {
        width: '80%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,

    },
    section_wrapper: {
        flex: 1,
        height: 'auto',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',


    },
    section_container: {
        flex: 1,
        height: 100,
        width: '100%',
        backgroundColor: midPurple,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 10,
        padding: 20,
    },

    logo: {
        flex: 1,
        justifyContent: 'center',
    }

});

class ProfileScreen extends Component {
    render() {
        return (
            <LinearGradient colors={backGradient} style={styles.container} >
                <View style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Logo />
                    </View>
                    <View style={styles.section_wrapper}>
                        <Title text={"PROFILE"} />
                        <View style={styles.section_container}>
                            <SubTitle text={'User Name'} />
                            <SecondarySubtitle text={'Last session 6 hours ago'} />
                        </View>
                    </View>
                    <View style={styles.section_wrapper}>
                        <Title text={"SETTINGS"} />
                        <View style={styles.section_container} >
                            <SecondarySubtitle text={'Dark mode'} />
                            <SecondarySubtitle text={'Notification'} />
                        </View>
                    </View>
                    <PrimaryButton text={'Sign Out'} route={"Login"} navigation={this.props.navigation.navigate} />
                </View>
            </LinearGradient>
        );
    }
}

export default ProfileScreen
