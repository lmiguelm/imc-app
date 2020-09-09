import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    header: {
        height: 255,
        width: '100%',
        backgroundColor: '#774DD6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        height: 250,
        width: '100%',
        resizeMode: 'contain'
    },
    loginContainer: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 30,
        color: '#32264D',
    },
    linkText: {
        fontFamily: 'Roboto_400Regular',
        color: '#774DD6'
    },
    
    inputGroup: {
        alignSelf: 'center',
        width: '90%'
    },
    linkContainer: {
        flexDirection: 'column',
        paddingHorizontal: 25,
        alignItems: 'flex-end',
    },
    checkboxContainer: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        color: 'red'
    },
    labelCheck: {
        marginLeft: 10,
        fontFamily: 'Roboto_400Regular',
        color: '#6A6180'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'flex-start'
    }
    
});

export default styles;