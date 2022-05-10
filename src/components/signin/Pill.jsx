import { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import UI_COLORS from '../../colors'

export const Sport = {
	FUTBOL: '⚽ Fútbol',
	FUTBOL_SALA: '🥅 Fútbol sala',
	BALONMANO: '🤾‍♂️ Balonmano',
	BALONCESTO: '🏀 Baloncesto',
	RUGBY: '🏈 Rugby',
	VOLLEYBALL: '🏐 Volleyball',
	NONE: 'none'
}

export const Pill = (props) => {
    const { sport, selectedSport, handleSelectedSport } = props
	const selected = (sport === selectedSport ? true : false)

	const handleOnPress = () => {
		selected === false
		? handleSelectedSport(sport)
		: handleSelectedSport(Sport.NONE)
	}

	return (
        // <View style={styles.container2}>
            <TouchableHighlight
            style={
				selected === true
				? styles.buttonSelected
				: styles.button
			}
            underlayColor={UI_COLORS.gray2}
            activeOpacity={0.8}
            onPress={handleOnPress}>
            {/* <View style={styles.container2}> */}
                {/* <View style={styles.container}> */}
					{
						selected === true
						? <Text style={styles.labelSelected}>{sport}</Text>
						: <Text style={styles.label}>{sport}</Text>
					}
                    {/* <Text style={styles.label}>{text}</Text> */}
                {/* </View> */}
            {/* </View> */}
            </TouchableHighlight>
        // </View>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		fontWeight: '500',
		width: 'auto',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy
	},
	labelSelected: {
		fontSize: 16,
		fontWeight: '700',
		width: 'auto',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy
	},
    container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
        padding: 10,
        width: 'auto',
        // maxWidth: '50%',
		backgroundColor: '#F5F7FB',
		borderWidth: 1,
		borderColor: UI_COLORS.gray2,
		borderRadius: 100,
	},
    container2: {
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'center',
        padding: 10,
        width: 'auto',
        // backgroundColor: 'blue',
	},
	button: {
        display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
        padding: 10,
		margin: 5,
        width: 'auto',
        // maxWidth: '50%',
		backgroundColor: UI_COLORS.gray3,
		borderWidth: 1,
		borderColor: UI_COLORS.gray2,
		borderRadius: 100,
	},
	buttonSelected: {
        display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
        padding: 10,
		margin: 5,
        width: 'auto',
		backgroundColor: UI_COLORS.gray3,
		borderWidth: 1,
		borderColor: UI_COLORS.blueNavy,
		borderRadius: 100,
	},
})
