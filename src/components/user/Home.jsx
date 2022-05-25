import { View, Text, Image, StyleSheet } from 'react-native'
import UI_COLORS from '../../utils/colors'
import NewExamButton from '../common/Buttons/NewExamButton'
import Table from '../common/Table'
import ResultsPieChart from '../common/ResultsPieChart'
import ResultsSummary from './ResultsSummary'
import AppBar from '../common/AppBar'
import Avatar from './Avatar'
import { NonTouchablePill } from '../common/Pill'
import { Sport } from '../signup/SportChoice'

const Home = ({ navigation }) => {
	const handleOnPress = () => {
		navigation.navigate('Exam')
	}

    return (
		<View>
			<View style={container}>
				<Avatar />
				<View style={{ display: 'flex', flexDirection: 'column', marginLeft: 15 }}>
					<Text style={styles.title}>Edu</Text>
					<Text style={styles.label}>edusegrich@gmail.com</Text>
					
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
						<View style={{ marginRight: 4 }}>
							<NonTouchablePill {...{text: Sport.FUTBOL }} />
						</View>
						<View style={{ marginRight: 4 }}>
							<NonTouchablePill {...{text: '3ª División' }} />
						</View>
					</View>
				</View>
			</View>

			<View style={statistics}>
				<ResultsPieChart />
				<ResultsSummary />
			</View>

			<Table />
			
			<View style={styles.buttonContainer}>
				<NewExamButton {...{ handleOnPress: handleOnPress }}/>
			</View>
		</View>
    )
}

const generalStyles = StyleSheet.create({
	rectangle: {
		backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 8,
	}
})

const styles = StyleSheet.create({
	buttonContainer: {
		display: 'flex',
		alignItems: 'flex-end',
		marginHorizontal: 24
	},
	lastExams: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 5,
		padding: 12,
		width: 'auto',
	},
	statistics: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 12,
		marginHorizontal: 24,
		padding: 12,
		width: 'auto',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		marginHorizontal: 24,
		padding: 24,
		width: 'auto',
	},
	title: {
		display: 'flex',
		fontSize: 16,
		fontWeight: '700',
		// marginTop: 20,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
	label: {
		fontSize: 12,
		fontWeight: '500',
		width: 'auto',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
    click: {
        color: UI_COLORS.blueLink,
    },
})

const container = StyleSheet.compose(generalStyles.rectangle, styles.container)
const lastExams = StyleSheet.compose(generalStyles.rectangle, styles.lastExams)
const statistics = StyleSheet.compose(generalStyles.rectangle, styles.statistics)

export default Home
