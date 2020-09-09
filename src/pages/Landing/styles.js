import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loggedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    picture: {
       height: 40,
       width: 40,
       borderRadius: 100,
       marginRight: 10
    },
    name: {
        fontFamily: 'Roboto_400Regular',
        color: '#D4C2FF'
    },
    logout: {
        backgroundColor: '#9871F5',
        padding: 5,
        borderRadius: 8

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },
    banner: {
        height: 250,
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 15
    },
    titleBold: {
        fontFamily: 'Roboto_700Bold_Italic'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: '#9871F5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    buttonText: {
        fontFamily: 'Roboto_700Bold',
        color: '#FFF',
        fontSize: 20
    },
});

export default styles;