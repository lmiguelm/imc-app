import React, { useState, useEffect, useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, ActivityIndicator, BackHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Modalize from '../../components/Modalize';

import AuthContext from '../../contexts/auth';

import { validateEmail } from '../../utils/email';

import styles from './styles';

export default function Login() {

    const { navigate } = useNavigation();

    const { signIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [enableButton, setEnableButton] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [loading, setLoading] = useState(false);


    // validando email e senha informados.
    useEffect(() => {
        if(validateEmail(email) && password.length >= 5) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }

    }, [email, password]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);


    function goToRegisterPage() {
        navigate('Register');
    }

    function goToForgotPasswordPage() {
        navigate('ForgotPassword')
    }

    async function handleSignIn() {
        Keyboard.dismiss();
        setLoading(true);
        
        try {
            await signIn(email, password, rememberMe);
            setEmail('');
            setPassword(''); 
        } catch(error) {            
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

    function logginWithoutAccount() {
        setModal({
            color: '#6842C2',
            text: 'Você entrará em nosso App sem conta, com isso não terá acesso a todas as funcionalidas disponíveis.',
            icon: 'info-outline',
            colorIcon: '#04d361',
            button: {
                backgroundColor: '#24EF7F',
                navigate: () => navigate('Landing'),
                textButton: 'Ok'
            }
        });
        setShowModal(true);
    }
    
    return(
        <>
            <KeyboardAvoidingView style={ styles.container } behavior="position" >
            
                <LinearGradient colors={['#6842C2', '#774DD6', '#8257E5']} style={ styles.header }>
                    <LottieView
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        source={require('../../assets/lottie/4565-heartbeat-medical.json')}
                        autoPlay
                        loop={false}
                        speed={0.4}
                    />

                </LinearGradient>

                <View style={ styles.loginContainer }>
                    <Text style={ styles.title }>
                        Fazer login
                    </Text>

                    <TouchableOpacity onPress={ goToRegisterPage } >
                        <Text style={ styles.linkText }>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.inputGroup}>   
                    <Input 
                        placeholder="E-mail"
                        autoComplete="email"
                        value={ email }
                        keyboardType="email-address"
                        onChangeText={ value => setEmail(value) }
                        icon={
                            <Entypo name="mail" size={20} color="#c1bccc" />
                        }
                    />

                    <Input 
                        placeholder="Senha"
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
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                        
                        {!rememberMe ? (
                            <>
                                <AntDesign name="checkcircleo" size={20} color="#6A6180" />
                                <Text style={styles.labelCheck}>Lembre-me</Text>
                            </>
                        ):(
                            <>
                                <AntDesign name="checkcircle" size={20} color="#774DD6" />
                                <Text style={[styles.labelCheck, {color: '#774DD6'}]}>Lembre-me</Text>
                            </>
                        )}
                        
                       
                    </TouchableOpacity>

                    <View style={styles.linkContainer}> 
                        <TouchableOpacity onPress={ goToForgotPasswordPage } >
                           <Text style={ [styles.linkText, {marginBottom: 5, color: '#6A6180'}] }>Esqueci minha senha</Text>  
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ logginWithoutAccount }>
                            <Text style={ [styles.linkText, {fontFamily: 'Roboto_700Bold'}] } >Entrar sem conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    {!loading ? (
                        <Button
                            text="Entrar"
                            color="#04D361"
                            enabled={enableButton}
                            action={handleSignIn}
                        />
                    ): (
                        <Button
                            enabled={false}
                        >
                            <ActivityIndicator  size="large" color="#6842C2" />
                        </Button>
                    )}
                </View>
                
               

            </KeyboardAvoidingView>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res)} 
                modal={ modal }
            >
            </Modalize>
        </>
    );
}