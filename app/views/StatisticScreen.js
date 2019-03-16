import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { mainTextColor, exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import DaysContainer from '../components/statistic/DaysContainer'
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
    text: {
        color: mainTextColor,

    }
});

class StatisticScreen extends Component {

    state = {
        averages: {
            mon: 35,
            tue: 75,
            wed: 100,
            thu: 195,
            fri: 165,
            sat: 110,
            sun: 140,
        },
    }
    render() {
        return (
            <LinearGradient colors={backGradient} style={styles.container}>
                {/* Insert top text here */}
                <View style={styles.textContainer}>
                    <Title text={'This weeks overview'} />
                    <SubTitle text={'A visual summary of your week'} />

                </View>
                <DaysContainer averages={this.state.averages} />

            </LinearGradient>
        );
    }
}

export default StatisticScreen
