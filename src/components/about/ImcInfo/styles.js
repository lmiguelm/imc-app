import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E6E6F0',
        marginBottom: 16,
        padding: 10,
        overflow: 'hidden',
        marginRight: 10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 25,
        color: '#fff',
        marginBottom: 10
    },  
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        marginLeft: 0
        
    },
    infoContainer: {
        flex: 2,
        marginLeft: 10
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#fff'
    },
});

export default styles;