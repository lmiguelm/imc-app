import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Picker } from 'react-native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { formatDate } from '../../utils/date';

import { useImc } from '../../contexts/imc';

import Header from '../../components/Header';
import ImcItem from '../../components/historic/ImcItem';
import Button from '../../components/Button';

import styles from './styles'

export default function Historic() {

    const { navigate } = useNavigation();

    const { imcs, loadImcs, filter } = useImc();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');  
    const [rememberMe, setRememberMe] = useState(false);  

    useEffect(() => { 
        async function getImcs() {
            setLoading(true);
            await loadImcs();
            setLoading(false);
        }  
        getImcs();
    }, []);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };


    async function handleFilterImc() {
        setLoading(true);
        await filter(formatDate(date), selectedValue);
        setLoading(false);
    }

    async function handleRemoveFilter() {
        setLoading(true);
        await loadImcs();
        setLoading(false);
    }

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         navigate('Landing');
    //     });
    // }, []);
    
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
                        <View style={styles.pickerContainer}>
                            <RectButton onPress={() => setShow(true)} style={ [styles.input, { width: '90%' }] } >
                                <View style={ styles.inputDate }>
                                    <Text style={ styles.inputDateText }>
                                        { formatDate(date) }
                                    </Text>
                                    <AntDesign style={{ paddingRight: 10}} name="calendar" size={24} color="#a787f5" />
                                </View>
                            </RectButton>
                            <TouchableOpacity style={{ marginBottom: 10, marginLeft: 5 }} onPress={() => setRememberMe(!rememberMe)}>
                        
                                {!rememberMe ? (
                                    <>
                                        <AntDesign name="checkcircleo" size={25} color="#6A6180" />
                                    </>
                                ):(
                                    <>
                                        <AntDesign name="checkcircle" size={25} color="#774DD6" />
                                    </>
                                )}
                                
                            
                            </TouchableOpacity>
                        </View>

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
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Selecione" selectedValue value="" />
                                <Picker.Item label="Muito abaixo do peso" value="Muito abaixo do peso" />
                                <Picker.Item label="Abaixo do peso" value="Abaixo do peso" />
                                <Picker.Item label="Peso normal" value="Peso normal" />
                                <Picker.Item label="Acima do peso" value="Acima do peso" />
                                <Picker.Item label="Obesidade I" value="Obesidade I" />
                                <Picker.Item label="Obesidade II (Severa)" value="Obesidade II (Severa)" />
                                <Picker.Item label="Obesidade III (Mórbida)" value="Obesidade III (Mórbida)" />
                            </Picker>
                        </View>

                        <RectButton onPress={handleFilterImc} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                <Entypo name="magnifying-glass" size={20}/>{' '}
                                Filtrar
                            </Text>
                        </RectButton>

                        <RectButton onPress={handleRemoveFilter} style={[styles.submitButton, { backgroundColor: 'red', marginTop: 10 }]}>
                            <Text style={styles.submitButtonText}>
                                <MaterialCommunityIcons name="filter-remove" size={20}/>{' '}
                                Remover
                            </Text>
                        </RectButton>
                    </View>
               )}
           </Header>

            {/* Content */}

            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#6842C2"/>
                    <Text style={styles.textLoading}>Carregando conteúdo...</Text>
                </View>
            ): (
                <View
                    style={{ flex: 1,marginTop: -40, alignSelf: 'center', width: '90%', marginBottom: 20 }} 
                >
                    {imcs.length !== 0 ? (
                        <FlatList 
                            data={imcs}
                            keyExtractor={item => item.id.toString()}
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
                </View>
            )}
        </LinearGradient>
    );
}