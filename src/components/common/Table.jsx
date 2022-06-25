import { View, Text, StyleSheet } from 'react-native'
import { ScorePill, Result } from './ScorePill'
import UI_COLORS from '../../utils/colors'

const Table = ({ navigation }) => {
    return (
        <View style={container}>
            <View style={styles.row}>
                <Text style={styles.columnTitle}>Fecha</Text>
                <Text style={styles.columnTitle}>Resultado</Text>
            </View>
            <View style={generalStyles.separator} />
            <View style={styles.row}>
                <Text style={styles.contentLabel}>05/05/2022</Text>
                <ScorePill result={Result.PASSED} />
            </View>
            <View style={generalStyles.separator} />
            <View style={styles.row}>
                <Text style={styles.contentLabel}>05/05/2022</Text>
                <ScorePill result={Result.FAILED} />
            </View>
            <View style={generalStyles.separator} />
            <View style={styles.row}>
                <Text style={styles.contentLabel}>05/05/2022</Text>
                <ScorePill result={Result.PASSED} />
            </View>
            <View style={generalStyles.separator} />
            <View style={styles.row}>
                <Text style={styles.contentLabel}>05/05/2022</Text>
                <ScorePill result={Result.FAILED} />
            </View>
            <View style={generalStyles.separator} />
            <View style={styles.row}>
                <Text style={styles.click} onPress={() => navigation.navigate('ExamsList')}>ver todos los exámenes...</Text>
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
	},
    separator: {
        marginVertical: 10,
        width: '100%',
        borderTopWidth: 1,
        borderColor: UI_COLORS.gray,
    }
})

const styles = StyleSheet.create({
    container: {
		display: 'flex',
		flexDirection: 'column',
		marginVertical: 12,
		marginHorizontal: 24,
		padding: 12,
		width: 'auto',
	},
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {

    },
    columnTitle: {
		fontWeight: '700',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
    contentLabel: {
        fontSize: 12,
		fontWeight: '500',
		width: 'auto',
		fontFamily: 'Inter',
		color: UI_COLORS.blueNavy,
	},
    click: {
        fontSize: 12,
		fontWeight: '500',
		fontFamily: 'Inter',
        color: UI_COLORS.blueLink,
    },
})

const container = StyleSheet.compose(generalStyles.rectangle, styles.container)

export default Table
