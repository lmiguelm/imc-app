import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        marginTop: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20
    }
    
});

export default styles;