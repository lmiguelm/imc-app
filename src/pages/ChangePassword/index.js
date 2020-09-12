import React, { useState, useEffect } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Modalize from '../../components/Modalize';

import { useAuth } from '../../contexts/auth';

import styles from './styles';
import logo from '../../assets/logo/imc.png';

export default function ChangePassword() {

    const { navigate } = useNavigation();

    const { changePassword } = useAuth();

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confimPassword, setConfirmPassword] = useState('');

    const [enableButton, setEnableButton] = useState(false);

    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if(oldPassword.length >= 5 && newPassword.length >= 5 && confimPassword.length >= 5 && newPassword === confimPassword ) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }, [ oldPassword, newPassword, confimPassword ]);

    function goToProfilePage() {
        navigate('Profile');
    }

    async function handleChangePassword() {
        Keyboard.dismiss();
        setLoading(true);
        try {
            await changePassword(oldPassword, newPassword);
            setLoading(false);
            navigate('Feedback', {
                title: 'Senha alterada com sucesso!',
                text: 'Sua nova senha já está disponível. :)',
                textButton: 'Voltar para perfil',
                navigate: () => navigate('Profile')
            });      
        } catch (e) {
            setLoading(false);
            setModal({
                color: '#ff0000',
                text: e,
                icon: 'error'
            });
            setShowModal(true);
        }
    }

    return(
        <>
            <KeyboardAvoidingView behavior="position" style={styles.container}>
                <View style={styles.header}>
                    <BorderlessButton onPress={goToProfilePage}>
                        <Ionicons name="md-arrow-round-back" size={24} color="#D4C2FF" />
                    </BorderlessButton>

                    <Text style={styles.textHeader}>
                        Meu Perfil
                    </Text>

                    <TouchableOpacity>
                        <Image source={logo} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.info}>
                        <Text style={styles.title}>Alteração de senha</Text>
                        <Text style={styles.text}>
                            Informe a sua senha atual e a nova senha. Lembrando que a nova senha deverá
                            ter no minímo 5 caracteres. 
                        </Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Input 
                            placeholder="Senha atual"
                            autoComplete="password"
                            secureTextEntry={ !showOldPassword }
                            value={ oldPassword }
                            onChangeText={ value => setOldPassword(value) }      
                            icon={
                                <BorderlessButton onPress={ () => setShowOldPassword(!showOldPassword) }>    
                                    { showOldPassword ? (
                                        <Entypo name="eye-with-line" size={20} color="#774DD6" />
                                        ): (
                                        <Entypo style={ styles.icon } name="eye" size={20} color="#c1bccc" />
                                    )}
                                </BorderlessButton>   
                            }
                        />

                        <Input 
                            placeholder="Nova senha"
                            autoComplete="password"
                            secureTextEntry={ !showNewPassword }
                            value={ newPassword }
                            onChangeText={ value => setNewPassword(value) }      
                            icon={
                                <BorderlessButton onPress={ () => setShowNewPassword(!showNewPassword) }>    
                                    { showNewPassword ? (
                                        <Entypo name="eye-with-line" size={20} color="#774DD6" />
                                        ): (
                                        <Entypo style={ styles.icon } name="eye" size={20} color="#c1bccc" />
                                    )}
                                </BorderlessButton>   
                            }
                        />

                        <Input 
                            placeholder="Digite novamente"
                            autoComplete="password"
                            secureTextEntry={ !showNewPassword }
                            value={ confimPassword }
                            onChangeText={ value => setConfirmPassword(value) }      
                            icon={
                                <BorderlessButton onPress={ () => setShowNewPassword(!showNewPassword) }>    
                                    { showNewPassword ? (
                                        <Entypo name="eye-with-line" size={20} color="#774DD6" />
                                        ): (
                                        <Entypo style={ styles.icon } name="eye" size={20} color="#c1bccc" />
                                    )}
                                </BorderlessButton>   
                            }
                        />
                    </View>
                        
                    {!loading ? (
                        <Button
                            text="Confirmar"
                            color="#04d361"
                            enabled={enableButton}
                            action={handleChangePassword}
                        />
                    ) : (
                        <Button enabled={false}>
                            <ActivityIndicator  size="large" color="#6842C2" />
                        </Button>
                    )}
                </View>
            </KeyboardAvoidingView>

            <Modalize 
                modal={modal}
                open={showModal}
                callback={callback => setShowModal(callback)}
            />
        </>
    );
}