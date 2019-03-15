import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import { Title, SubTitle } from '../components/textComponents/'
import { mainTextColor, exellentCardGradient, okayCardGradient, stressGradient, anxiousGradient, exhaustedGradient } from '../utils/styles'
import Day from '../components/statistic/Day'
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
    render() {
        return (
            <LinearGradient colors={backGradient} style={styles.container}>
                {/* Insert top text here */}
                <View style={styles.textContainer}>
                    <Title text={'This weeks overview'} />
                    <SubTitle text={'A visual summary of your week'} />

                </View>
                <View style={styles.statisticContainer}>
                    <Day averageEmotion={200}></Day>
                    <Day averageEmotion={100}></Day>
                    <Day averageEmotion={20}></Day>
                    <Day averageEmotion={70}></Day>
                    <Day averageEmotion={90}></Day>
                    <Day averageEmotion={165}></Day>
                    <Day averageEmotion={106}></Day>
                </View>
                <View style={styles.days_container}>
                    <Text style={styles.text}>Mon</Text>
                    <Text style={styles.text}>Tue</Text>
                    <Text style={styles.text}>Wed</Text>
                    <Text style={styles.text}>Thu</Text>
                    <Text style={styles.text}>Fri</Text>
                    <Text style={styles.text}>Sat</Text>
                    <Text style={styles.text}>Sun</Text>

                </View>

            </LinearGradient>
        );
    }
}

export default StatisticScreen
