import { View, Text, StyleSheet } from 'react-native'
import UI_COLORS from '../../colors'

const Separator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.separator} />
            <Text style={styles.circle}>o</Text>
            <Text style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        top: '2%',
        marginTop: 10,
        marginHorizontal: 10,
        width: '40%',
        borderTopWidth: 1,
        borderColor: UI_COLORS.blueNavy,
    },
	circle: {
		display: 'flex',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
    container: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Separator
