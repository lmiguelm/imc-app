import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBF5'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 35
    },
    progress: {
        flexDirection: 'row',
    },
    content: {
        marginBottom: 30,
        maxWidth: 300,
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        color: '#32264D',
        fontSize: 40,
        marginBottom: 20
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        color: '#6A6180'
    },
    info: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginBottom: 20,
        fontFamily: 'Roboto_700Bold',
        color: '#32264D',
        fontSize: 25
    },
    inputGroup: {
        alignSelf: 'center',
        width: '90%'
    }
});

export default styles;