import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, ActivityIndicator, Keyboard } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Input from '../../Input';
import Button from '../../Button';
import Modalize from '../../Modalize';

import { validateEmail } from '../../../utils/email';
import api from '../../../services/api';

import styles from './styles';

export default function Step1({callback}) {

    const { navigate } = useNavigation();

    const [email, setEmail] = useState('');

    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [enableButton, setEnableButton] = useState(false);

    const [loading, setLoading] = useState(false);
    
    //validando email informado
    useEffect(() => {
        validateEmail(email) ? setEnableButton(true) : setEnableButton(false);
    }, [ email ]);

    function goToLoginPage() {
        navigate('Login');
    }

    async function submitForm() {

        Keyboard.dismiss();
        setLoading(true);

        try {
            await api.post('auth/forgotPassword', {
                email
            });
            callback(2, email);
        } catch (e) {
            setModal({
                color: '#ff0000',
                text: e.response.data.message,
                icon: 'error'
            });
            setShowModal(true);
        } finally {
            setLoading(false);
        }
        

    }

    return (
        <>
            <KeyboardAvoidingView style={ styles.container } behavior="position" >
                <LinearGradient colors={['#6842C2', '#774DD6', '#8257E5']} style={ styles.header }>
                    <LottieView
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        source={require('../../../assets/lottie/4565-heartbeat-medical.json')}
                        autoPlay
                        loop={false}
                        speed={0.4}
                    />
                </LinearGradient>

                <View style={ styles.infoContainer }>
                    <BorderlessButton onPress={ goToLoginPage }>
                        <Ionicons  name="md-arrow-round-back" size={24} color="#32264D" />
                    </BorderlessButton>

                    <Text style={ styles.title }>
                        Esqueceu sua senha ?
                    </Text>

                    <Text style={ styles.text }>
                        Relaxa, vamos dar um jeito nisso.
                    </Text>
                </View>

                <View style={ styles.inputGroup}>   
                    <Input 
                        placeholder="E-mail"
                        autoComplete="email"
                        keyboardType="email-address"
                        value={ email }
                        onChangeText={ value => setEmail(value) }
                        icon={
                            <Entypo name="mail" size={20} color="#c1bccc" />
                        }
                    />
                    
                    {!loading ? (
                        <Button
                            text="Próximo"
                            color="#04d361"
                            action={ submitForm }
                            enabled={ enableButton }
                        />
                    ) : (
                        <Button enabled={false}>
                             <ActivityIndicator  size="large" color="#6842C2" />
                        </Button>
                    )}
                    
                </View>

            </KeyboardAvoidingView>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res) } 
                modal={ modal }
            />
        </>
    );
}
