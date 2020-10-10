import { Stylesheet, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressContainer: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    controlsArea: {
        marginTop: 20
    },
    slideContainer: {
        flexDirection: 'row',
        width: 300,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a787f5',
        borderRadius: 8,
    },
    sliderText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Roboto_700Bold',
    },
    label: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold_Italic'
    },
    buttonsContainer: {
        marginTop: 15
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#04d361',
        borderRadius: 8,
        marginBottom: 25,
        marginTop: 20
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20
    },
    inputGroup: {
        marginTop: 35,
        alignSelf: 'center',
        width: '90%'
    }
});

export default styles;