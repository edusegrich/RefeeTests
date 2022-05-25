import { View, Image, TouchableHighlight, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import UI_ICONS from '../../../icons/iconsDict'
import UI_COLORS from '../../../utils/colors'

const NewExamButton = (props) => {
    const { handleOnPress } = props
    return (
        <TouchableHighlight
        style={styles.button}
        underlayColor={'none'}
        activeOpacity={0.8}
        onPress={handleOnPress}>
            <View style={styles.container}>
                <Image style={styles.icon} source={UI_ICONS.plus} />
            </View>
        </TouchableHighlight>
    )
}

const generalStyles = StyleSheet.create({
    container: {
        backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 200,
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: UI_COLORS.white,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
		borderRadius: 200,
        alignSelf: 'flex-start',
        padding: 15,
        // position: 'absolute',
        // top: Constants.
	},
	icon: {
		width: 32,
		height: 32,
	}
})

const passed = StyleSheet.compose(generalStyles.container, styles.passed)
const failed = StyleSheet.compose(generalStyles.container, styles.failed)

export default NewExamButton
