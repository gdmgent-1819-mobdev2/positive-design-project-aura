import React, { Component } from 'react'
import { Alert, Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { mainTextColor, highLight, exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import DaysContainer from '../components/statistic/DaysContainer'
import WeeksContainer from '../components/statistic/WeeksContainer'
import { backGradient } from '../utils/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textContainer: {
        width: '100%',
        marginBottom: 40,
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        height: 'auto',

    },
    days_container: {
        marginTop: 10,
        width: '70%',
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        color: 'white',
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
    statisticContainer: {
        maxHeight: '40%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '70%',
    },
    options: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    options_text: {
        color: mainTextColor,
        fontSize: 18,
        margin: 5,
    },
    options_text_selected: {
        color: highLight,
        fontSize: 24,
        margin: 5,
    },
    text: {
        color: mainTextColor,
    }
});

class StatisticScreen extends Component {

    state = {
        averagesDay: {
            mon: 35,
            tue: 75,
            wed: 100,
            thu: 195,
            fri: 165,
            sat: 110,
            sun: 140,
        },
        averagesWeek: {
            week1: 160,
            week2: 75,
            week3: 100,
            week4: 195,
        },
        weekly: true,
    }
    render() {
        if (this.state.weekly) {
            return (
                <LinearGradient colors={backGradient} style={styles.container}>
                    {/* Insert top text here */}
                    <View style={styles.textContainer}>
                        <Title text={"This week's overview"} />
                        <SubTitle text={'A visual summary of your week'} />


                    </View>

                    <View style={styles.options}>


                        <Text onPress={() => {
                            this.setState({
                                weekly: true,
                            })
                        }} style={this.state.weekly ? styles.options_text_selected : styles.options_text}>


                            Week</Text>
                        <Text onPress={() => {
                            this.setState({
                                weekly: false,
                            })
                        }} style={this.state.weekly ? styles.options_text : styles.options_text_selected}>Month</Text>
                    </View>


                    <DaysContainer averages={this.state.averagesDay} />

                </LinearGradient >
            )
        } else {
            return (
                <LinearGradient colors={backGradient} style={styles.container}>
                    {/* Insert top text here */}
                    <View style={styles.textContainer}>
                        <Title text={'This month overview'} />
                        <SubTitle text={'A visual summary of your month'} />

                    </View>
                    <View style={styles.options}>
                        <Text onPress={() => {
                            this.setState({
                                weekly: true,
                            })
                        }} style={this.state.weekly ? styles.options_text_selected : styles.options_text}>Week</Text>
                        <Text onPress={() => {
                            this.setState({
                                weekly: false,
                            })
                        }} style={this.state.weekly ? styles.options_text : styles.options_text_selected}>Month</Text>
                    </View>

                    <WeeksContainer averages={this.state.averagesWeek} />

                </LinearGradient>
            )
        }
    }
}

export default StatisticScreen
