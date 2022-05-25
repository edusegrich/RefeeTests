import { ScrollView, View, StyleSheet } from 'react-native'
import QuestionCard from './QuestionCard'
import NextButton from '../signup/NextButton'

const Exam = (props) => {
    const handleOnPress = () => {

    }

    return (
        <ScrollView>
            <QuestionCard {...{ number: 1 }}/>
            <QuestionCard {...{ number: 2 }}/>
            <QuestionCard {...{ number: 3 }}/>
            <QuestionCard {...{ number: 4 }}/>
            <View style={styles.container}>
                <NextButton {...{ label: 'Finalizar', handleOnPress }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginHorizontal: 24,
        marginBottom: 32
    }
})

export default Exam
