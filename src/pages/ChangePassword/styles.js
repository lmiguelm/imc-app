import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8257E5'
    },  
    textHeader: {
        fontFamily: 'Roboto_400Regular',
        color: '#D4C2FF'
    },  
    content: {
        alignItems: 'center',
        padding: 30
    },
    info: {
        alignSelf: 'center'
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        color: '#32264D',
        marginTop: 10,
        marginBottom: 5
    },  
    text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        color: '#6A6180'
    },
    inputGroup: {
        marginTop: 30
    }
});

export default styles;