import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
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
    inputGroup: {
        width: '90%',
        alignSelf: 'center'
    }
});

export default styles;