import { StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        marginTop: 5,
        padding: 10
    },
    chart: {
        alignSelf: 'center',
        justifyContent: 'center'
    },  
    progressContainer: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressNumber: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        color: '#6A6180'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15
    },
    content: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    contentArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentText: {
        fontFamily: 'Roboto_700Bold',
        color: '#6A6180',
        marginLeft: 5
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'flex-end'
    },
    footerText: {
        marginLeft: 5,
        fontFamily: 'Roboto_700Bold',
        color: '#6A6180'
    },
    

});

export default styles;