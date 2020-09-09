import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
    pictureContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9871F5',
        padding: 20
    },
    picture: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    changPictureContainer: {
        marginTop: -55,
        height: 50,
        width: 50,
        marginLeft: 120,
        borderRadius: 100,
        backgroundColor: '#04D361'
    },
    iconCam: {
        alignSelf: 'center',
        padding: 10
    },
    name: {
       marginBottom: 40,
       marginTop: 15,
       fontFamily: 'Roboto_700Bold',
       color: '#fff',
       fontSize: 25
    },  
    content: {
        flex: 2
    },
    scroll: {
        marginTop: -40,
        backgroundColor: '#ddd'
    },
    dataContainer: {
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        marginTop: 5,
        padding: 20
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        color: '#32264D',
        marginBottom: 10
    },
    label: {
        fontFamily: 'Roboto_400Regular',
        color: '#9C98A6',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 10
    },
    footerContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    footerTextContainer: {
        marginLeft: 20
    },
    footerTitle: {
        fontFamily: 'Roboto_700Bold',
        color: '#8257E5'
    },
    footerText: {
        fontFamily: 'Roboto_400Regular',
        color: '#C1BCCC',
        maxWidth: '80%'
    },
    linkText: {
        fontFamily: 'Roboto_700Bold',
        color: '#8257E5',
        fontSize: 15,
        marginBottom: 15
    }
    
});

export default styles;