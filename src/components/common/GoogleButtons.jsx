import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { useFonts } from 'expo-font'
import Inter from '../../fonts/Inter.ttf'
import UI_ICONS from '../../icons/iconsDict'

export const SignWithGoogleButton = () => {
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
                <Image style={styles.icon} source={UI_ICONS.google} />
                <Text style={styles.label}>Regístrate con Google</Text>
            </View>
        </TouchableHighlight>
	)
}

export const LoginWithGoogleButton = () => {
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
                <Image style={styles.icon} source={UI_ICONS.google} />
                <Text style={styles.label}>Inicia sesión con Google</Text>
            </View>
        </TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 14,
		fontWeight: '500',
		marginLeft: 10,
		width: 'auto',
		fontFamily: 'Inter',
		color: '#152536',
		textAlignVertical: 'center',
	},
	icon: {
		width: 24,
		height: 24,
	},
    container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		height: 'auto',
        padding: 10,
		backgroundColor: '#F5F7FB',
		borderWidth: 1,
		borderColor: '#E8E8ED',
		borderRadius: 6,
	},
})
