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
    infoContainer: {
        padding: 30,
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 30,
        color: '#32264D',
        marginTop: 20
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        color: '#6A6180',
    },
    inputGroup: {
        alignSelf: 'center',
        width: '90%'
    },
});

export default styles;