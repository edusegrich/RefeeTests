import { View, Text, StyleSheet } from 'react-native'
import UI_COLORS from '../../colors'

const QuestionCard = (props) => {

    return (
        <View style={styles.container}>
            <Text style={questionNumber}>Pregunta 1</Text>
            <Text style={statement}>¿Cuáles son las normas básicas del Reglamento?</Text>
            {/* <Text style={statement}>¿A qué deporte te dedicas?</Text> */}
            <Text style={answer}>A. Las normas básicas son bla bla bla bla bla bla bla</Text>
            <Text style={answer}>B. Las normas básicas son bla bla bla bla bla bla bla</Text>
            <Text style={answer}>C. Las normas básicas son bla bla bla bla bla bla bla</Text>
            <Text style={answer}>D. Las normas básicas son bla bla bla bla bla bla bla</Text>
        </View>
    )
}

const generalStyles = StyleSheet.create({
    letra: {
        fontSize: 14,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
    }
})

const styles = StyleSheet.create({
    questionNumber: {
        alignSelf: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginBottom: 15,
		backgroundColor: UI_COLORS.yellowSoft,
		borderWidth: 1,
		borderColor: UI_COLORS.gray,
		borderRadius: 5,
    },
	statement: {
		width: 'auto',
        marginBottom: 25,
        fontSize: 16,
        fontWeight: '700'
	},
    answer: {
        marginBottom: 10,
    },
	container: {
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

const statement = StyleSheet.compose(generalStyles.letra, styles.statement)
const questionNumber = StyleSheet.compose(generalStyles.letra, styles.questionNumber)
const answer = StyleSheet.compose(generalStyles.letra, styles.answer)

export default QuestionCard
