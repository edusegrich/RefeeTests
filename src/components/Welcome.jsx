import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import LoginButton from './common/LoginButton'
import Separator from './common/Separator'
import { LoginWithGoogleButton } from './common/GoogleButtons'
import UI_ICONS from '../icons/iconsDict'
import UI_COLORS from '../colors'

const Welcome = ({ navigation }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logo} source={UI_ICONS.refeetests} />
                <TextInput
                    style={styles.input}
                    placeholder={'Correo electrónico'}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={'Contraseña'}
                />
                <LoginButton />
                {/* <View>
                    <View style={styles.separator} />
                    <Text style={styles.title}>o</Text>
                </View> */}
                <Separator />
                <LoginWithGoogleButton />
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Text style={styles.label}>
						¿No tienes una cuenta? <Text style={styles.click} onPress={() => navigation.navigate('Signin')}>Regístrate</Text>
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
