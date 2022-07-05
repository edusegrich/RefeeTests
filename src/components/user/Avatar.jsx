import { View, Image, StyleSheet } from 'react-native'
import UI_ICONS from '../../icons/iconsDict'
import UI_COLORS from '../../utils/colors'

const Avatar = ({ image }) => {
    return (
        <Image style={styles.image} source={UI_ICONS.profileGray} />
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        padding: 5,
        backgroundColor: UI_COLORS.white,
        borderWidth: 1,
        borderColor: UI_COLORS.gray,
		borderRadius: 100,
		shadowColor: '#000',
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		// elevation: 21,
    }
})

export default Avatar
