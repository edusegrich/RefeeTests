import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { PieChart } from 'react-native-svg-charts'
import UI_COLORS from '../../utils/colors'

const ResultsPieChart = (props) => {
    let data = [
        {
            key: 1,
            amount: 70,
            svg: { fill: UI_COLORS.green, filter: 'drop-shadow(1px 1px 3px #888)' },
        },
        {
            key: 2,
            amount: 30,
            svg: { fill: UI_COLORS.red, filter: 'drop-shadow(1px 1px 3px #888)' }
        }
    ]

    return (
        <View style={styles.container}>
            <PieChart
                style={{ height: 100 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		display: 'flex',
		flexDirection: 'column',
		width: 100,
	}
})

export default ResultsPieChart
