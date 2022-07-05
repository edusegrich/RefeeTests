import { ScrollView, View, StyleSheet } from 'react-native'
import QuestionCard from './QuestionCard'
import NextButton from '../signup/NextButton'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Exam = (props) => {
    const [questionsList, setQuestionsList] = useState([])

    useEffect(() => {
        axios.get('http://192.168.1.51:3000/api/question', {
            params: {
                sportId: '62c20b5af472059c9ed8c8ce'
            }
        })
            .then(function (response) {
                console.log(response.status)
                if (response.status === 200) {
                    console.log(response.data)
                    setQuestionsList(response.data.map((question, index) => 
                        // eslint-disable-next-line react/jsx-key
                        <QuestionCard {...{
                            number: index+1,
                            statement: question.statement,
                            options: question.options,
                            id: question._id
                        }}/>
                    ))
                    console.log(questionsList)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const handleOnPress = () => {

    }

    return (
        <ScrollView>
            {/* <QuestionCard {...{ number: 1 }}/>
            <QuestionCard {...{ number: 2 }}/>
            <QuestionCard {...{ number: 3 }}/>
            <QuestionCard {...{ number: 4 }}/> */}
            {questionsList}
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
