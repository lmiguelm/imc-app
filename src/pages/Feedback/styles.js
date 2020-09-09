import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    textContainer: {
        width: '100%',
    },  
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 35,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        color: '#D4C2FF',
        textAlign: 'center',
        marginTop: 20
    },
    buttonContainer: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50
    }
});

export default styles;