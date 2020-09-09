import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, Picker, RefreshControl, BackHandler } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { formatDate } from '../../utils/date';

import api from '../../services/api';

import Header from '../../components/Header';
import ImcItem from '../../components/historic/ImcItem';
import Button from '../../components/Button';

import styles from './styles'


function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function Historic() {

    const { navigate } = useNavigation();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
    const [imcs, setImcs] = useState([]);

    useEffect(() => {
        api.get('imc').then(res => {
            setImcs(res.data);
        });
    });

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            navigate('Landing');
            return;
        });
    }, []);

    const onRefresh = useCallback( async () => {
        setRefreshing(true);
        await wait(2000);
        //chamar api aqui ...
        alert('Clima quente');
        setRefreshing(false);
    });

    function onChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    function goToImcPage() {
        navigate('Imc');
    }

    return(
        <LinearGradient 
            colors={['#F0F0F7', '#EBEBF5', '#E6E6F0']}
            style={ styles.container }
        >
           <Header 
                title="Meu Histórico"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <View style={ styles.filter }>
                                <AntDesign name="filter" size={24} color="#04d361" />
                            <Text style={ styles.filterText } >{'  '}
                                Filtrar resultado{'  '}
                            </Text>
                            { isFiltersVisible ? (
                                <AntDesign name="up" size={14} color="#fff" />
                            ): (
                                <AntDesign name="down" size={14} color="#fff" />
                            )}
                        </View>
                    </BorderlessButton>
                )}
            >
               { isFiltersVisible && (
                    <View style={ styles.searchForm }>
                        <Text style={ styles.label }>Qual a data?</Text>
                        <RectButton onPress={() => setShow(true)} style={ styles.input } >
                            <View style={ styles.inputDate }>
                                <Text style={ styles.inputDateText }>
                                    { formatDate(date) }
                                </Text>
                                <AntDesign style={{ paddingRight: 10}} name="calendar" size={24} color="#a787f5" />
                            </View>
                        </RectButton>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                            />
                        )}

                        <Text style={ styles.label }>Qual indice de massa?</Text>
                        <View style={ styles.input }>
                            <Picker
                                style={{ 
                                    fontFamily: 'Roboto_400Regular',
                                    color: '#222',
                                    fontSize: 16,
                                 }}
                                // selectedValue={selectedValue}
                                
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Magreza" value="Magreza" />
                                <Picker.Item label="Normal" value="Normal" />
                                <Picker.Item label="Sobrepeso" value="Sobrepeso" />
                                <Picker.Item label="Obesidade" value="Obesidade" />
                                <Picker.Item label="Obesidade Grave" value="Obesidade Grave" />
                            </Picker>
                        </View>

                        <RectButton onPress={() => console.log('ok')} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                <Entypo name="magnifying-glass" size={20}/>{' '}
                                Buscar
                            </Text>
                        </RectButton>
                    </View>
               )}
           </Header>

            {/* Content */}

            <ScrollView
                refreshControl={
                    <RefreshControl 
                        colors={['#8257E5', '#04d361']} 
                        refreshing={refreshing} 
                        onRefresh={onRefresh} 
                    />
                }
                style={{ marginTop: -40 }} 
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }} 
            >
                {imcs.length == 0 ? (
                    <FlatList 
                        data={imcs}
                        keyExtractor={item => item.id}
                        renderItem={ ({ item }) => {
                            return (
                                <ImcItem item={item}/>
                            );
                        }}
                    /> 
                ) : (
                    <View style={styles.noDatafoundContainer}>
                        <Text style={styles.noDatafoundText}>Nenhum resultado encontrado :(</Text>
                        <View style={styles.noDatafountButton}>
                            <Button
                                text="Calcular Imc"
                                color="#04d361"
                                enabled
                                action={goToImcPage}
                            />
                        </View>
                    </View>
                )}

                

            </ScrollView>

        </LinearGradient>
    );
}