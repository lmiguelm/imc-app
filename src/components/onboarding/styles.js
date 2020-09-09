import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7'
    },
    header: {
        height: 255,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 35,
        color: '#C1BCCC',
        marginVertical: 10,

    },
    text: {
        fontFamily: 'Roboto_700Bold',
        color: '#6A6180',
        fontSize: 25,
        textAlign: 'left'
    },
    footer: {
        flexDirection: 'row',
        marginVertical: 50,
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'space-between'
    },
    step: {
        flexDirection: 'row',
    },
});

export default styles;