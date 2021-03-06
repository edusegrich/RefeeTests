import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import NextButton from './NextButton'
import { Pill, PillSelection } from '../common/Pill'
import UI_COLORS from '../../utils/colors'

export const CategoryChoice = () => {
	const [selectedCategory, setSelectedCategory] = useState(PillSelection.NONE)

	const handleSelectedCategory = (category) => {
		setSelectedCategory(category)
	}

	const handleOnPress = () => {
		
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>¿En qué categoría?🥇🥈🥉</Text>
            <View style={styles.pills}>
				<Pill {...{text: 'Primera División', selectedPill: selectedCategory, handleSelectedPill: handleSelectedCategory}} />
				<Pill {...{text: 'Segunda División', selectedPill: selectedCategory, handleSelectedPill: handleSelectedCategory}} />
				<Pill {...{text: 'Tercera División', selectedPill: selectedCategory, handleSelectedPill: handleSelectedCategory}} />
			</View>
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
