import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle  } from 'react-native-svg-charts';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import {calculateImc, formatImc} from '../../utils/imc';
import { useImc } from '../../contexts/imc';

import Modalize from '../../components/Modalize';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';

export default function Imc() {

    const { createImc } = useImc();

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [title, setTitle] = useState('Magreza');
    const [color, setColor] = useState('#8257E5');
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [enableButton, setEnableButton] = useState(false);

    const { navigate } = useNavigation();

    // imc
    useEffect(() => {
        // calculo
        const res = calculateImc(height, weight);
        setImc(res.toFixed(2));
        // setando imc
        const { color, title } = formatImc(res);
        setColor(color);
        setTitle(title);
    }, [height, weight]);

    useEffect(() => {
        if(height == 0 && weight == 0) {
            setEnableButton(false);
        } else {
            setEnableButton(true);
        }
    }, [height, weight])

    async function handleSaveImc() {
        setLoading(true);
        const imcData = {height, weight, title, color, title, imc }
        try {
            await createImc(imcData);
            
            navigate('Feedback', {
                title: 'IMC salvo com sucesso!',
                text: `Seu IMC foi salvo, para acessar o seu histórico basta clicar no botão abaoixo :)`,
                textButton: 'Histórico',
                navigate: () => navigate('Historic') 
            });
            
        } catch (e) {
            setModal({
                color: '#ff0000',
                text: error,
                icon: 'error'
            });
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
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
                            { title }
                        </Text>
                    </View>
                </ProgressCircle>
                            
                <View style={styles.inputGroup}>
                    <Input
                        placeholder="Informe sua altura em metros"
                        keyboardType="numeric"
                        colorFocused="#04d361"
                        maxLength={5}
                        onChangeText={value => setHeight(value)}
                        icon={
                            <MaterialCommunityIcons name="human-male-height" color="#6842C2" size={20} />
                        }
                    />
                    <Input
                        placeholder="Informe seu peso em Kg"
                        keyboardType="numeric"
                        colorFocused="#04d361"
                        maxLength={5}
                        onChangeText={value => setWeight(value)}
                        icon={
                            <MaterialCommunityIcons name="weight-kilogram" color="#6842C2" size={20} />
                        }
                    />
                </View>

                <View style={[styles.inputGroup, { marginTop: 10 }]}>  
                    {!loading ? (
                        <Button
                            action={handleSaveImc}
                            text="Salvar"
                            color="#04D361"
                            enabled={enableButton}
                        />
                    ): (
                        <Button
                            action={handleSaveImc}
                            text="Salvando imc ..."
                            color="#04D361"
                            enabled={false}
                        />
                    )}
                </View>
            </LinearGradient>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res)} 
                modal={ modal }
            />
        </>
    );
}
