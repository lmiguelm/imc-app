import { Stylesheet, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#112',
    },
    header: {
        marginTop: 30,
    },
    body: {
        flex: 1
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: "#d4c2ff",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 25,
    },
    filterText: {
        fontFamily: 'Roboto_400Regular',
        color: '#d4c2ff',
        fontSize: 15
    },
    searchForm: {
        marginTop: 24, 
        marginBottom: 24,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Roboto_400Regular',     
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    inputBlock: {
        width: '48%'
    },
    inputDate: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    inputDateText: {
        fontFamily: 'Roboto_400Regular',
        color: '#222',
        fontSize: 16
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: 45,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
    },
    noDatafoundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        marginTop: 5,
        padding: 10
    },
    noDatafoundText: {
        fontFamily: 'Roboto_700Bold_Italic',
        fontSize: 20,
        color: '#32264D',
        textAlign: 'center'
    },
    noDatafountButton: {
        width: '80%',
        marginTop: 20
    },
    loadingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    textLoading: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 15,
        marginLeft: 15,
        color: '#32264D'
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default styles;