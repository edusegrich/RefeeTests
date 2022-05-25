import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import NextButton from './NextButton'
import { SignWithGoogleButton } from '../common/GoogleButtons'
import Separator from '../common/Separator'
import UI_ICONS from '../../icons/iconsDict'
import UI_COLORS from '../../utils/colors'
import { isValidEmail, isValidPassword } from '../../utils/checkCredentials'

export const InputState = {
	VALID: 'Valid',
	NONVALID: 'Non valid',
	NONE: 'none'
}

export const Signup = ({ navigation }) => {
	const [validEmail, setValidEmail] = useState(InputState.NONE)
	const [validPassword, setValidPassword] = useState(InputState.NONE)
	const emailError = validEmail === InputState.NONVALID ? true : false
	const passwordError = validPassword === InputState.NONVALID ? true : false

	const handleSetEmail = (text) => {
		String(text).length !== 0 && isValidEmail(text)
		? setValidEmail(InputState.VALID)
		: setValidEmail(InputState.NONE)
	}

	const handleSetPassword = (text) => {
		String(text).length !== 0 && isValidPassword(text)
		? setValidPassword(InputState.VALID)
		: setValidPassword(InputState.NONE)
	}

	const handleOnPress = () => {
		if (validEmail === InputState.VALID && validPassword === InputState.VALID) {
			navigation.navigate('SportChoice')
		} else {
			if (validEmail === InputState.NONE) setValidEmail(InputState.NONVALID)
			if (validPassword === InputState.NONE) setValidPassword(InputState.NONVALID)
		}
	}

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={UI_ICONS.refeetests} />
			<Text style={styles.title}>Regístrate</Text>

			<Text style={styles.label}>Email</Text>
			<TextInput 
				style={emailError === false ? styles.input : styles.inputError}
				placeholder={'ejemplo@mail.com'}
				onChangeText={handleSetEmail}
			/ >
			{
				emailError && <Text style={styles.errorMessage}>La cuenta de correo no es válida</Text>
			}

			<Text style={styles.label}>Contraseña</Text>
			<TextInput
				style={passwordError === false ? styles.input : styles.inputError}
				secureTextEntry={true}
				placeholder={'****************'}
				onChangeText={handleSetPassword}
			/>
			{
				passwordError && <Text style={styles.errorMessage}>La contraseña es necesaria</Text>
			}

			<NextButton {...{
				label: 'Siguiente',
				handleOnPress: handleOnPress,
			}} />
			<Separator />
			<SignWithGoogleButton />
			<View style={{ alignItems: 'center', marginTop: 40 }}>
				<Text style={styles.loginLabel}>
					¿Ya tienes una cuenta? <Text style={styles.click} onPress={() => navigation.navigate('Welcome')}>Inicia Sesión</Text>
				</Text>
			</View>
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
	logo: {
		height: 75,
		width: 'auto',
        marginTop: 20,
        marginBottom: 20,
	},
	title: {
		display: 'flex',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
		marginTop: 5,
		// marginBottom: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
	description: {
		display: 'flex',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 20,
		marginBottom: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
	label: {
		fontSize: 14,
		fontWeight: '700',
		width: 'auto',
		marginTop: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy
	},
	loginLabel: {
		fontSize: 14,
		fontWeight: '500',
		marginTop: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
	click: {
        color: UI_COLORS.blueLink,
    },
	input: {
		fontSize: 14,
		marginTop: 5,
		padding: 10,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: UI_COLORS.gray,
		fontFamily: 'Inter',
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
		backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 8,
	}
})
