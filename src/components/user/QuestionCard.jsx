import { View, Text, StyleSheet } from 'react-native'
import Answer from './Answer'
import UI_COLORS from '../../utils/colors'

const QuestionCard = (props) => {
    const { number, statement, options, id } = props
    const letters = ['A', 'B', 'C', 'D']
    const answers = options.map((option, index) =>
        // eslint-disable-next-line react/jsx-key
        <Answer {...{ optionLetter: letters[index], answerText: option }} />
    )
    return (
        <View style={styles.container}>
            <Text style={questionNumber}>Pregunta {number}</Text>
            <Text style={statementStyle}>{statement}</Text>
            {answers}
            {/* <Answer {...{ option: 'A', answerText: 'Las normas básicas del reglamento son bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.' }} />
            <Answer {...{ option: 'B', answerText: 'Las normas básicas del reglamento son bla bla bla bla bla bla.' }} />
            <Answer {...{ option: 'C', answerText: 'Las normas básicas del reglamento son bla bla bla bla bla bla.' }} />
            <Answer {...{ option: 'D', answerText: 'Las normas básicas del reglamento son bla bla bla bla bla bla.' }} /> */}
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
	container: {
		display: 'flex',
		flexDirection: 'column',
		margin: 12,
		padding: 24,
		width: 'auto',
        height: 'auto',
		backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 8,
	}
})

const statementStyle = StyleSheet.compose(generalStyles.letra, styles.statement)
const questionNumber = StyleSheet.compose(generalStyles.letra, styles.questionNumber)
const answer = StyleSheet.compose(generalStyles.letra, styles.answer)

export default QuestionCard
