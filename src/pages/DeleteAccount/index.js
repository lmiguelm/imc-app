import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, Image, ActivityIndicator} from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import logo from '../../assets/logo/imc.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Modalize from '../../components/Modalize';

import AuthContext, { useAuth } from '../../contexts/auth';

import styles from './styles';

export default function DeleteAccount() {

    const { deleteUser } = useAuth();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [enableButton, setEnableButton] = useState(false);
    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const {navigate} = useNavigation();

    useEffect(() => {
        if(password.length >= 5 && password === confirmPassword) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }, [ password, confirmPassword ]);

    function goToProfilePage() {
        navigate('Profile');
    }

    async function handleDeleteAccount() {
        setLoading(true);
        try {
            await deleteUser();

            navigate('Feedback', {
                title: 'Conta removida com suceeso!',
                text: `Sua conta foi removida. Caso queria voltar atrás é só criar uma nova :)`,
                // textButton: 'Ok',
                // navigate: () => navigate('Profile') 
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
                        <Text style={styles.title}>Tem certeza que deseja deletar sua conta?</Text>
                        <Text style={styles.text}>
                            ATENÇÃO: Para proseguir com a deleção da conta informe sua senha e confime.
                        </Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Input 
                            placeholder="Digite novamente"
                            autoComplete="password"
                            secureTextEntry={ !showPassword }
                            value={ password }
                            onChangeText={ value => setPassword(value) }      
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
                            autoComplete="password"
                            secureTextEntry={ !showPassword }
                            value={ confirmPassword }
                            onChangeText={ value => setConfirmPassword(value) }      
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
                    </View>
                        
                    {!loading ? (
                        <Button
                            text="Confirmar"
                            color="#04d361"
                            enabled={enableButton}
                            action={handleDeleteAccount}
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