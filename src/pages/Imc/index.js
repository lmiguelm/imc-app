import React, { useState, useEffect } from 'react';
import { View, Text, Slider, ActivityIndicator, BackHandler } from 'react-native';
import { ProgressCircle  } from 'react-native-svg-charts';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import {calculateImc, formatImc} from '../../utils/imc';

import styles from './styles';

export default function Imc() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [imcTitle, setImcTitle] = useState('Magreza');
    const [color, setColor] = useState('#8257E5');
    const [loading, setLoading] = useState(false);

    const { navigate } = useNavigation();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            navigate('Landing');
            return;
        });
    }, []);

    // imc
    useEffect(() => {
        // calculo
        const res = calculateImc(height, weight);
        setImc(res.toFixed(2));
        // setando imc
        const { color, title } = formatImc(res);
        setColor(color);
        setImcTitle(title);
    }, [height, weight]);

    function submitImc() {
        navigate('Feedback', {
            title: 'IMC salvo com sucesso!',
            text: `Olá Miguel, seu IMC foi salvo, para acessar o seu histórico basta clicar no botão abaoixo :)`,
            textButton: 'Histórico',
            navigate: () => navigate('Historic') 
        });
    }

    return(
        <LinearGradient 
            colors={['#6842C2', '#774DD6', '#8257E5']}
            style={ styles.container }
        >
                    
            <ProgressCircle 
                style={{ height: 250, width: 250, marginTop: 10  }} 
                progress={1} 
                progressColor={color}
                animateDuration={1000}
                animate={true} 
            >
                <View style={ styles.progressContainer}> 
                    <Text style={{
                        fontFamily: 'Roboto_700Bold',
                        fontSize: 65,
                        color: color
                    }} >
                        { imc }
                    </Text>

                    <Text style={{
                        fontFamily: 'Roboto_700Bold_Italic',
                        fontSize: 27,
                        color: color,
                        textAlign: 'center'
                    }}>
                        { imcTitle }
                    </Text>
                </View>
            </ProgressCircle>

            <View style={ styles.controlsArea }>
                <Text style={ styles.label }>
                    <MaterialCommunityIcons name="human-male-height" size={17} />{' '}
                    Altura
                </Text>
                
                <View style={ styles.slideContainer }>
                    <Text style={ [styles.sliderText, {color}] }>     
                        { height } M
                    </Text>
                    <Slider
                        style={{width: 250, height: 50}}
                        minimumValue={0}
                        maximumValue={3}
                        minimumTrackTintColor={color}
                        maximumTrackTintColor="#fff"
                        thumbTintColor={color}

                        value={height}
                        onValueChange={(value) => setHeight(parseFloat(value.toFixed(2)))}
                    />
                </View>

                <Text style={ styles.label }>
                    <MaterialCommunityIcons name="weight-kilogram" size={17} />{' '}
                    Peso
                </Text>

                <View style={ styles.slideContainer }>
                    <Text style={ [styles.sliderText, {color}] }> { weight } Kg</Text>
                    <Slider
                        style={{width: 250, height: 50}}
                        minimumValue={0}
                        maximumValue={300}
                        minimumTrackTintColor={color}
                        maximumTrackTintColor="#fff"
                        thumbTintColor={color }

                        value={weight}
                        onValueChange={(value) => setWeight(parseInt(value))}
                    />
                </View>
            </View>

            <View style={ styles.buttonsContainer }>
                <RectButton onPress={ submitImc } style={ styles.button } enabled={loading} >
                    {!loading ? (
                        <Text style={ styles.buttonText }>
                            <AntDesign name="save" size={20} />{' '}
                            Salvar
                        </Text>

                    ): (
                        <ActivityIndicator  size="large" color="#6842C2" />
                    )}
                </RectButton>
            </View>
        </LinearGradient>
    );
}
