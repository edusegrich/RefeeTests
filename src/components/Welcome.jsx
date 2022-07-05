import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import LoginButton from './common/LoginButton'
import NextButton from './signup/NextButton'
import { InputState } from './signup/Signup'
import Separator from './common/Separator'
import { LoginWithGoogleButton } from './common/GoogleButtons'
import UI_ICONS from '../icons/iconsDict'
import UI_COLORS from '../utils/colors'
import { isValidEmail, isValidPassword } from '../utils/checkCredentials'

const Welcome = ({ navigation }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [validEmail, setValidEmail] = useState(InputState.NONE)
	const [validPassword, setValidPassword] = useState(InputState.NONE)
	const emailError = validEmail === InputState.NONVALID ? true : false
	const passwordError = validPassword === InputState.NONVALID ? true : false

	const handleSetEmail = (text) => {
		// String(text).length !== 0 && isValidEmail(text)
		// ? setValidEmail(InputState.VALID)
		// : setValidEmail(InputState.NONE)
	}

	const handleSetUsername = (text) => {
		setUsername(String(text))
	}

	const handleSetPassword = (text) => {
		String(text).length !== 0 && isValidPassword(text)
		? setValidPassword(InputState.VALID)
		: setValidPassword(InputState.NONE)
		setPassword(String(text))
	}

	const handleOnPress = () => {
		axios.post('http://192.168.1.51:3000/api/login', {
			username: username,
			password: password
		})
			.then(function (response) {
				console.log(response.status)
				if (response.status === 200) {
					setValidEmail(InputState.VALID)
					setValidPassword(InputState.VALID)
					
					navigation.navigate('Home')
				}
			})
			.catch(function (error) {
				console.log(error)
			})
		if (validEmail === InputState.VALID && validPassword === InputState.VALID) {
			navigation.navigate('Home')
		} else {
			if (validEmail === InputState.NONE) setValidEmail(InputState.NONVALID)
			if (validPassword === InputState.NONE) setValidPassword(InputState.NONVALID)
		}
	}

    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logo} source={UI_ICONS.refeetests} />
                <TextInput
                    style={emailError === false ? styles.input : styles.inputError}
                    placeholder={'Nombre de Usuario'}
					onChangeText={handleSetUsername}
                />
				{
					emailError && <Text style={styles.errorMessage}>La cuenta de correo no es válida</Text>
				}

                <TextInput
                    style={passwordError === false ? styles.input : styles.inputError}
                    secureTextEntry={true}
                    placeholder={'Contraseña'}
					onChangeText={handleSetPassword}
                />
				{
					passwordError && <Text style={styles.errorMessage}>La contraseña es necesaria</Text>
				}

                <NextButton {...{
					label: 'Inicia Sesión',
					handleOnPress: handleOnPress,
				}} />

                <Separator />
                <LoginWithGoogleButton />
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Text style={styles.label}>
						¿No tienes una cuenta? <Text style={styles.click} onPress={() => navigation.navigate('Signup')}>Regístrate</Text>
					</Text>
                </View>
            </View>
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

export default Welcome
