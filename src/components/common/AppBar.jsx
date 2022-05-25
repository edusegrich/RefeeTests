import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import { useState } from 'react'
import UI_COLORS from '../../utils/colors'
import UI_ICONS from '../../icons/iconsDict'

const Tab = {
	HOME: 'home',
	PROFILE: 'profile',
	SETTINGS: 'settings',
	LOGOUT: 'logout',
}

const AppBar = () => {
    const [activeTab, setActiveTab] = useState(Tab.HOME)

    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }
    
    return (
        <View style={styles.bar}>
            <AppBarTab {...{ tab: Tab.HOME, text: 'Inicio', activeTab, handleActiveTab}} />
            <AppBarTab {...{ tab: Tab.PROFILE, text: 'Perfil', activeTab, handleActiveTab}} />
            <AppBarTab {...{ tab: Tab.SETTINGS, text: 'Configuración', activeTab, handleActiveTab}} />
            <AppBarTab {...{ tab: Tab.LOGOUT, text: 'Cerrar Sesión', activeTab, handleActiveTab}} />
        </View>
    )
}

const AppBarTab = ({tab, text, activeTab, handleActiveTab}) => {
    const isActiveTab = tab === activeTab ? true : false
    const textStyle = tab === activeTab ? labelActive : label
    let icon = UI_ICONS.home
    switch (tab) {
        case Tab.HOME:
            icon = isActiveTab === true ? UI_ICONS.home : UI_ICONS.homeGray
            break
        case Tab.PROFILE:
            icon = isActiveTab === true ? UI_ICONS.profile : UI_ICONS.profileGray
            break
        case Tab.SETTINGS:
            icon = isActiveTab === true ? UI_ICONS.settings : UI_ICONS.settingsGray
            break
        case Tab.LOGOUT:
            icon = isActiveTab === true ? UI_ICONS.logout : UI_ICONS.logoutGray
            break
    }

    const handleOnPress = () => {
        handleActiveTab(tab)
    }

    return (
        <TouchableHighlight
            underlayColor={'transparent'}
            activeOpacity={0.8}
            onPress={handleOnPress}>
            <View style={styles.tab}>
                <Image style={styles.icon} source={icon} />
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableHighlight>
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
    font: {
        fontSize: 8,
        fontFamily: 'Inter',
        fontWeight: '500'
    }
})

const styles = StyleSheet.create({
    bar: {
        display: 'flex',
		flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 10,
        // backgroundColor: UI_COLORS.gray,
		// borderRadius: 8,
    },
    label: {
        color: UI_COLORS.gray4,
    },
    tab: {
        display: 'flex',
        alignItems: 'center',
        // marginHorizontal: 15
        // borderWidth: 1
    },
    icon: {
        height: 24,
        width: 24
    },
    labelActive: {
        color: UI_COLORS.blueNavy,
    }
})

const container = StyleSheet.compose(generalStyles.rectangle, styles.container)
const label = StyleSheet.compose(generalStyles.font, styles.label)
const labelActive = StyleSheet.compose(generalStyles.font, styles.labelActive)

export default AppBar
