import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aboutContainer: {
        marginTop: 5,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E6E6F0',
        marginBottom: 16,
        padding: 10,
        overflow: 'hidden',
    },
    aboutTitle: {
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 25,
        marginBottom: 10,
        color: '#6842C2'
    },
    aboutText: {
        textAlign: 'justify',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        padding: 5,
        color: '#6A6180'
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: { 
        flex: 1
    },
    content: {
        flex: 1
    }, 
    calculate: {
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    }
   
});

export default styles;