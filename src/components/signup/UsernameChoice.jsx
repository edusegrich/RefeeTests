import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { InputState } from './Signup'
import NextButton from './NextButton'
import UI_COLORS from '../../utils/colors'

export const UsernameChoice = ({ navigation }) => {
    const [username, setUsername] = useState('')
	const [validUsername, setValidUsername] = useState(InputState.NONE)
    const usernameError = validUsername === InputState.NONVALID ? true : false

    const handleSetUsername = (text) => {
        setUsername(String(text))
        console.log(String(text))
        axios.get('http://192.168.1.51:3000/api/user', {
			params: {
                username: String(text)
            }
		})
			.then(function (response) {
                console.log(response.data)
                if (response.data.length > 0 && Object.keys(response.data[0]).includes('username')) {
                    setValidUsername(InputState.NONVALID)
                } else {
                    setValidUsername(InputState.VALID)
                }
			})
			.catch(function (error) {
				console.log(error)
			})
    }

	const handleOnPress = () => {
        if (validUsername === InputState.VALID) {
            axios.post('http://192.168.1.51:3000/api/user', {
                username: username,
                email: `${username}@mail.com`,
                password: '1234'
            })
                .then(function (response) {
                    console.log(response.status)
                    if (response.status === 200) {
                        navigation.navigate('SportChoice')
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Elige un nombre de usuario🧐</Text>
            <TextInput 
				style={usernameError === false ? styles.input : styles.inputError}
				placeholder={'refeetests'}
				onChangeText={handleSetUsername}
			/ >
            {
                usernameError && <Text style={styles.errorMessage}>El nombre de usuario no está disponible</Text>
            }
			<NextButton {...{handleOnPress: handleOnPress, label: 'Siguiente'}} />
		</View>
	)
}

const styles = StyleSheet.create({
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
