import { ScrollView, Text, TextInput, Image, StyleSheet } from 'react-native'
import QuestionCard from './QuestionCard'
import UI_COLORS from '../../colors'

const Exam = (props) => {

    return (
        <ScrollView>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
        </ScrollView>
    )
}

export default Exam
