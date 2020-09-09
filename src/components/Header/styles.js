import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 35,
        backgroundColor: '#8257E5',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Roboto_700Bold_Italic',
        color: '#fff',
        fontSize: 26,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'

    },
    iconContainer: {
        alignItems: 'center'
    },
    iconText: {
        fontSize: 20,
        fontFamily: 'Roboto_700Bold_Italic',
        color: '#fff'
    }
});

export default styles;