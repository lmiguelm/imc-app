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
        marginBottom: 10,
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
        width: '80%',
        alignSelf: 'center',
        marginTop: 20
    },
    linkText: {
        fontFamily: 'Roboto_400Regular',
        color: '#774DD6',
        marginTop: 30
    },
    codeFieldRoot: {marginBottom: 30},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#DCDCE5',
        textAlign: 'center',
        borderRadius: 8,
        color: '#6A6180'
    },
    focusCell: {
        borderColor: '#774DD6',
    },
});

export default styles;