import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import { useState } from 'react'
import UI_COLORS from '../../utils/colors'
import UI_ICONS from '../../icons/iconsDict'

const Answer = ({ optionLetter, answerText }) => {
    const [selected, setSelected] = useState(false)
    const questionAnswered = false

    const handleOnPress = () => {
        selected === true
        ? setSelected(false)
        : setSelected(true)
    }
    
    return (
        <TouchableHighlight
            underlayColor={'transparent'}
            activeOpacity={0.8}
            onPress={handleOnPress}>
            <View style={selected === true ? containerSelected : generalStyles.container}>
                <Text style={optionStyle}>{optionLetter}</Text>
                <Text style={answer}>{answerText}</Text>
                {
                    questionAnswered && <View style={{ justifyContent: 'center' }}><Image style={styles.icon} source={UI_ICONS.redCross} /></View>
                }
            </View>
        </TouchableHighlight>
    )
}

const generalStyles = StyleSheet.create({
    letra: {
        fontSize: 14,
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 12,
        borderColor: UI_COLORS.gray,
        backgroundColor: UI_COLORS.gray3
    }
})

const styles = StyleSheet.create({
	option: {
        marginRight: 25,
        fontSize: 14,
	},
    answer: {
        width: '80%',
        fontSize: 16,
    },
    icon: {
        width: 12,
        height: 12
    },
    containerSelected: {
        borderWidth: 3,
        borderColor: UI_COLORS.blueNavy2
    }
})

const optionStyle = StyleSheet.compose(generalStyles.letra, styles.option)
const answer = StyleSheet.compose(generalStyles.letra, styles.answer)
const containerSelected = StyleSheet.compose(generalStyles.container, styles.containerSelected)

export default Answer
