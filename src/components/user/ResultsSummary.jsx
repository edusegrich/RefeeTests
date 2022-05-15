import { View, Text, StyleSheet } from 'react-native'
import {useState, useEffect } from 'react'
import UI_COLORS from '../../colors'

const ResultsSummary = (props) => {
    const totalExams = 100

    return (
        <View style={styles.container}>
            <Text style={total}>{totalExams}</Text>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
                <Text style={subtotal}>exámenes</Text>
                <Text style={subtotal}>realizados</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		display: 'flex',
		flexDirection: 'row',
	},
    total: {
        fontSize: 50,
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
    },
    subtotal: {
        fontSize: 15,
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'row',
    }
})

const generalStyles = StyleSheet.create({
    typography: {
        fontSize: 14,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
    }
})

const total = StyleSheet.compose(generalStyles.typography, styles.total)
const subtotal = StyleSheet.compose(generalStyles.typography, styles.subtotal)

export default ResultsSummary
