import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Input from '../../Input';
import Button from '../../Button';
import Modalize from '../../Modalize';

import api from '../../../services/api';

import styles from './styles';

export default function Step2({callback, userId}) {

    const { navigate } = useNavigation();

    const [loading, setLoading] = useState(false);
    const [enableButton, setEnableButton] = useState(false);
    const [password, setPassword]  = useState('');
    const [confirmPassword, setConfirmPassword]  = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({});

    useEffect(() => {
        if(password.length >= 5 && confirmPassword === password) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }, [password, confirmPassword]);

    function goToForgotPasswordPage() {
        console.log('ok');
        navigate('ForgotPassword');
    }

    async function changePassword() {
        setLoading(true);

        try {
            await api.post(`/auth/resetPassword`, {
                password,
                id: userId
            });
            callback(1);
            navigate('Feedback', { 
                title: 'Senha alterada com sucesso!',
                text: 'Agora é só voltar e fazer seu login novamente. :)',
                textButton: 'Fazer login',
                navigate: () => navigate('Login')
            });
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

    function goBack() {
        callback(1);
    }

    return(
        <>
            <View style={styles.container}>
                <View style={ styles.header }>
                    <BorderlessButton onPress={goBack}>
                        <Ionicons name="md-arrow-round-back" size={24} color="#32264D" />
                    </BorderlessButton>
                    
                    
                    <View style={ styles.progress }>
                        <FontAwesome name="circle-o" style={{ marginRight: 20 }} size={13} color="#32264D" />
                        <FontAwesome name="circle" size={13} color="#32264D" />
                    </View>
                </View>

                <View style={ styles.content}> 
                    <Text style={ styles.title }>
                    Quase lá... 
                    </Text>

                    <Text style={ styles.text }>
                        Informe sua nova senha. Lembrando que a senha deve conter no minímo
                        5 caracteres.
                    </Text>
                </View>

                <View style={styles.inputGroup}>
                    <Input
                        placeholder="Informe a nova senha"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={value => setPassword(value)}  
                        icon={
                            <BorderlessButton onPress={ () => setShowPassword(!showPassword) }>    
                                { showPassword ? (
                                    <Entypo name="eye-with-line" size={20} color="#774DD6" />
                                    ): (
                                    <Entypo style={ styles.icon } name="eye" size={20} color="#c1bccc" />
                                )}
                            </BorderlessButton>   
                        } 
                    />

                    <Input
                        placeholder="Digite novamente"
                        secureTextEntry={!showPassword}
                        value={confirmPassword}
                        onChangeText={value => setConfirmPassword(value)} 
                        icon={
                            <BorderlessButton onPress={ () => setShowPassword(!showPassword) }>    
                                { showPassword ? (
                                    <Entypo name="eye-with-line" size={20} color="#774DD6" />
                                    ): (
                                    <Entypo style={ styles.icon } name="eye" size={20} color="#c1bccc" />
                                )}
                            </BorderlessButton>   
                        }  
                    />

                    {!loading ? (
                        <Button
                            text="Confirmar"
                            enabled={enableButton}
                            color="#774DD6"
                            action={changePassword}
                        />
                    ):(
                        <Button>
                            <ActivityIndicator  size="large" color="#6842C2" />
                        </Button>
                    )}

                </View>
            </View>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res) } 
                modal={ modal }
            />
        </>
    );
}