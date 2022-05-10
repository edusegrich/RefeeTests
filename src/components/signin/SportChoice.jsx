import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import NextButton from './NextButton'
import { Pill, Sport } from './Pill'
import UI_COLORS from '../../colors'

export const SportChoice = ({ navigation }) => {
	const [selectedSport, setSelectedSport] = useState(Sport.NONE)
	const [choiceError, setChoiceError] = useState(false)
	// const choiceError = selectedSport === Sport.NONE ? true : false

	const handleSelectedSport = (sport) => {
		setSelectedSport(sport)
	}

	const handleOnPress = () => {
		selectedSport !== Sport.NONE
		? navigation.navigate('CategoryChoice')
		: setChoiceError(true)
		// if (selectedSport !== Sport.NONE) navigation.navigate('CategoryChoice')
		// else setChoiceError(selectedSport === Sport.NONE ? true : false)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>¿A qué deporte te dedicas?🧐</Text>
            <View style={styles.pills}>
				<Pill {...{sport: Sport.FUTBOL, selectedSport, handleSelectedSport}} />
				<Pill {...{sport: Sport.FUTBOL_SALA, selectedSport, handleSelectedSport}} />
				<Pill {...{sport: Sport.BALONMANO, selectedSport, handleSelectedSport}} />
				<Pill {...{sport: Sport.BALONCESTO, selectedSport, handleSelectedSport}} />
				<Pill {...{sport: Sport.RUGBY, selectedSport, handleSelectedSport}} />
				<Pill {...{sport: Sport.VOLLEYBALL, selectedSport, handleSelectedSport}} />
			</View>
			{
				choiceError && <Text style={styles.errorMessage}>Debes elegir un deporte</Text>
			}
			<NextButton {...{handleOnPress: handleOnPress, label: 'Siguiente'}} />
		</View>
	)
}

const styles = StyleSheet.create({
	pills: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
        padding: 10,
        width: 'auto',
		height: 'auto',
        // backgroundColor: 'blue',
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
		fontSize: 18,
		fontWeight: '700',
		width: 'auto',
		marginTop: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy
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
		backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 8,
	}
})
