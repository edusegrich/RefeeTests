import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import UI_ICONS from '../icons/iconsDict'
import UI_COLORS from '../colors'

const Home = ({ navigation }) => {

    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        marginTop: 10,
        width: 'auto',
        borderTopWidth: 1,
        borderColor: UI_COLORS.blueNavy,
    },
	title: {
		display: 'flex',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '700',
		marginTop: 20,
		marginBottom: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
	label: {
		fontSize: 14,
		fontWeight: '500',
		width: 'auto',
		marginTop: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
    click: {
        color: UI_COLORS.blueLink,
    },
	input: {
		fontSize: 14,
		marginTop: 10,
		padding: 10,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: UI_COLORS.gray,
		fontFamily: 'Inter',
	},
	logo: {
		height: 75,
		width: 'auto',
        marginBottom: 20,
	},
    icon: {
        width: 24,
        height: 24,
        margin: 5,
    },
	inputError: {
		fontSize: 14,
		marginTop: 5,
		padding: 10,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: UI_COLORS.red,
		fontFamily: 'Inter',
	},
	errorMessage: {
		fontSize: 14,
		fontWeight: '400',
		width: 'auto',
		marginTop: 5,
		fontFamily: 'Inter',
		color: UI_COLORS.red
	},
	container: {
		// backgroundColor: '#FFFACC'
		display: 'flex',
		flexDirection: 'column',
		margin: 24,
		padding: 24,
		width: 'auto',
		// backgroundColor: UI_COLORS.white,
		// shadowColor: '#000',
		// shadowOpacity: 0.53,
		// shadowRadius: 13.97,
		// elevation: 21,
		// borderRadius: 8,
	}
})

export default Home