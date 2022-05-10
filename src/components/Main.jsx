// import { StatusBar } from 'expo-status-bar'
// import Constants from 'expo-constants'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import UI_COLORS from '../colors'
import Welcome from './Welcome'
import { SportChoice } from './signin/SportChoice'
import { CategoryChoice } from './signin/CategoryChoice'
import { Signin } from './signin/Signin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import Inter from '../fonts/Inter.ttf'

const Stack = createNativeStackNavigator()

const Main = () => {
	const [loaded] = useFonts({
		Inter: Inter
	})
	if (!loaded) {
		return null
	}
	return (
		<View style={styles.container}>
			<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: 'transparent' }
			}}
			>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
				/>
				<Stack.Screen
					name="Signin"
					component={Signin}
					options={{
						contentStyle: { backgroundColor: UI_COLORS.blueSky,
						justifyContent: 'center' }
					}}
				/>
				<Stack.Screen
					name="SportChoice"
					component={SportChoice}
					options={{
						contentStyle: { backgroundColor: UI_COLORS.blueSky,
						justifyContent: 'center' }
					}}
				/>
				<Stack.Screen
					name="CategoryChoice"
					component={CategoryChoice}
					options={{
						contentStyle: { backgroundColor: UI_COLORS.blueSky,
						justifyContent: 'center' }
					}}
				/>
			</Stack.Navigator>
			
			{/* <Signin /> */}
			{/* <SportChoice /> */}
			{/* <Welcome /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		// backgroundColor: 'green',
		// backgroundColor: UI_COLORS.blueSky,
		// backgroundColor: '#FFEA81',
	},
})

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// })

export default Main
