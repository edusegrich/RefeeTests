import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { useFonts } from 'expo-font'
import Inter from '../../fonts/Inter.ttf'

const LoginButton = () => {
	const [loaded] = useFonts({
		Inter: Inter
	})
	if (!loaded) {
		return null
	}
	return (
        <TouchableHighlight
        style={styles.button}
        underlayColor={'red'}
        activeOpacity={0.8}
        onPress={() => true}>
            <View style={styles.container}>
                <Text style={styles.label}>Iniciar Sesión</Text>
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
		color: '#FFFFFF'
	},
    container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
        textAlignVertical: 'center',
	},
	button: {
        padding: 10,
        marginTop: 30,
		backgroundColor: '#152536',
		borderWidth: 1,
		borderColor: '#E8E8ED',
		borderRadius: 6,
	},
})

export default LoginButton