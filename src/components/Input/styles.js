import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 0,
        marginBottom: 5,
        width: '100%',
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
});

export default styles;