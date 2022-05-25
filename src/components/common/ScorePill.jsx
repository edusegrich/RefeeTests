import { View, Text, StyleSheet } from 'react-native'
import UI_COLORS from '../../utils/colors'

export const Result = {
	PASSED: 'Aprobado',
	FAILED: 'Suspenso',
}

export const ScorePill = ({ result }) => {
    return (
        <View>
            <Text style={result === Result.PASSED ? passed : failed}>
                {result}
            </Text>
        </View>
    )
}

const generalStyles = StyleSheet.create({
    container: {
		alignSelf: 'flex-start',
		paddingHorizontal: 5,
		paddingVertical: 1,
		fontSize: 12,
		borderRadius: 100,
    }
})

const styles = StyleSheet.create({
	passed: {
		color: UI_COLORS.green,
		backgroundColor: UI_COLORS.greenSoft
	},
    failed: {
		color: UI_COLORS.red,
		backgroundColor: UI_COLORS.redSoft
	}
})

const passed = StyleSheet.compose(generalStyles.container, styles.passed)
const failed = StyleSheet.compose(generalStyles.container, styles.failed)
