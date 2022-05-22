import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import UI_COLORS from '../../colors'

const NextButton = ({ label, handleOnPress }) => {
	return (
        <TouchableHighlight
        style={styles.button}
        underlayColor={UI_COLORS.blueNavy2}
        activeOpacity={0.8}
        onPress={handleOnPress}>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 14,
		fontWeight: '500',
		width: 'auto',
		fontFamily: 'Inter',
		color: UI_COLORS.white
	},
    container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
        padding: 10,
        marginTop: 30,
		backgroundColor: UI_COLORS.blueNavy,
		borderWidth: 1,
		borderColor: UI_COLORS.gray2,
		borderRadius: 6,
	},
})

export default NextButton
