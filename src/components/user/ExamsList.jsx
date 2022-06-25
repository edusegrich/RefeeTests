import { View, Text, StyleSheet } from 'react-native'
import ResultsPieChart from '../common/ResultsPieChart'
import UI_COLORS from '../../utils/colors'
import NextButton from '../signup/NextButton'

const ExamsList = () => {
    return (
        <View>
            <View style={container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <ResultsPieChart />
                    <View style={{ display: 'flex', marginLeft: 20 }}>
                        <Text>24 de marzo de 2022</Text>
                        <Text>Nota</Text>
                    </View>
                </View>
                <View>
                    <NextButton label={'Ver examen'} />
                </View>
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
	container: {
		display: 'flex',
		// alignItems: 'center',
		marginTop: 24,
		marginHorizontal: 24,
		padding: 24,
		width: 'auto',
	}
})

const container = StyleSheet.compose(generalStyles.rectangle, styles.container)

export default ExamsList
