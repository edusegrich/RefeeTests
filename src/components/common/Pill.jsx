import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import UI_COLORS from '../../utils/colors'

export const PillSelection = {
	NONE: 'none'
}

export const Pill = (props) => {
    const { text, selectedPill, handleSelectedPill } = props
	const selected = (text === selectedPill ? true : false)

	const handleOnPress = () => {
		selected === false
		? handleSelectedPill(text)
		: handleSelectedPill(PillSelection.NONE)
	}

	return (
		<TouchableHighlight
			style={
				selected === true
					? buttonSelected
					: button
			}
			underlayColor={UI_COLORS.gray2}
			activeOpacity={0.8}
			onPress={handleOnPress}>
			{
				selected === true
					? <Text style={labelSelected}>{text}</Text>
					: <Text style={label}>{text}</Text>
			}
		</TouchableHighlight>
	)
}

export const NonTouchablePill = (props) => {
    const { text } = props

	return (
        <Text style={nonTouchablePillStyle}>
			{text}
		</Text>
	)
}

const generalStyles = StyleSheet.create({
	font: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		backgroundColor: UI_COLORS.gray3,
		borderWidth: 1,
		borderRadius: 100,
	}
})

const styles = StyleSheet.create({
	label: {
		width: 'auto',
	},
	labelSelected: {
		fontWeight: '700',
		width: 'auto',
	},
	button: {
		borderColor: UI_COLORS.gray2,
		padding: 10,
		margin: 5,
        width: 'auto',
	},
	buttonSelected: {
		borderColor: UI_COLORS.blueNavy,
		padding: 10,
		margin: 5,
        width: 'auto',
	},
})

const nonTouchablePillStyles = StyleSheet.create({
	pill: {
		padding: 5,
		borderColor: UI_COLORS.gray2,
		fontSize: 12,
	}
})

const label = StyleSheet.compose(generalStyles.font, styles.label)
const labelSelected = StyleSheet.compose(generalStyles.font, styles.labelSelected)
const button = StyleSheet.compose(generalStyles.button, styles.button)
const buttonSelected = StyleSheet.compose(generalStyles.button, styles.buttonSelected)
const nonTouchablePillStyle = StyleSheet.compose(generalStyles.button, nonTouchablePillStyles.pill)
