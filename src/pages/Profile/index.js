import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator, BackHandler} from 'react-native';
import { TouchableOpacity, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Modalize from '../../components/Modalize';
import { validateEmail } from '../../utils/email';

import logo from '../../assets/logo/imc.png';
import styles from './styles';

import { useAuth } from '../../contexts/auth';

export default function Profile() {

    const {navigate} = useNavigation();

    const { user, editUser } = useAuth();

    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({});
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(user);
    const [enableButton, setEnableButton] = useState(false);

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         navigate('Landing');
    //         return;
    //     });
    // }, []);


    useEffect(() => {
        if(validateEmail(userData.email) && userData.last_name.length >= 5 && userData.name.length >= 5 ) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }, [userData]);

    async function getPermissionAsync() {
       await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    async function _pickImage() {
        await getPermissionAsync();

        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.cancelled && result.type == 'image') {
                setUserData({...user, avatar: result.uri});
                setModal({
                    color: '#04D361',
                    text: 'Imagem alterada com sucesso.',
                    icon: 'check-circle',
                    colorIcon: '#fff',
                });
                setShowModal(true);
            } else if(!result.cancelled && result.type != 'image') {
                setModal({
                    color: '#ff0000',
                    text: 'Imagem inválida. Tente novamente.',
                    icon: 'error',
                    colorIcon: '#fff',
                });
                setShowModal(true);
            }
            
        } catch (E) {
            setModal({
                color: '#ff0000',
                text: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
                icon: 'error',
                colorIcon: '#fff',
            });
            setShowModal(true);
        }
    }

    async function handleEditData() {
        setLoading(true); 
        try {
            await editUser(userData);
            setLoading(false);
            navigate('Feedback', {
                title: 'Sucesso',
                text: `Seus dados foram atualizados com sucesso!`,
                textButton: 'Meu Perfil',
                navigate: () => navigate('Profile') 
            });

        } catch(e) {
            setModal({
                color: '#ff0000',
                text: e,
                icon: 'error',
                colorIcon: '#fff',
            });
            setShowModal(true);
            setLoading(false);
        } 
    }

    function goToLandingPage() {
        navigate('Landing');
    }

    function goToChangePassPage() {
       navigate('ChangePassword');
    }
    
    return(
        <>
            <KeyboardAwareScrollView 
                style={ styles.container }
                resetScrollToCoords={{ x: 0, y: 0 }}
             >

                <View style={styles.header}>
                        <BorderlessButton onPress={goToLandingPage}>
                            <Ionicons name="md-arrow-round-back" size={24} color="#D4C2FF" />
                        </BorderlessButton>

                        <Text style={styles.textHeader}>
                            Meu Perfil
                        </Text>

                        <TouchableOpacity>
                            <Image source={logo} resizeMode="contain" />
                        </TouchableOpacity>
                </View>
                
                <View style={ styles.pictureContainer }>  
                    <Image 
                        style={styles.picture} 
                        source={{uri: userData.avatar}}
                    >
                    </Image>

                    <View  style={styles.changPictureContainer}>
                        <MaterialCommunityIcons onPress={ _pickImage } name="camera-outline" style={styles.iconCam} size={30} color="#fff" />
                    </View>
                    
                    <Text style={styles.name}> {user.name}</Text>
                </View>

                <LinearGradient 
                    colors={['#F0F0F7', '#EBEBF5', '#E6E6F0']}
                    style={ styles.content }
                >
                    <ScrollView
                        style={{ marginTop: -40 }} 
                        contentContainerStyle={{
                            paddingHorizontal: 16,
                            paddingBottom: 16,
                        }} 
                    >
                        <View style={styles.dataContainer}>
                            <Text style={styles.title}>Seus dados</Text>

                            <TouchableOpacity onPress={goToChangePassPage}>
                                <Text style={styles.linkText}>
                                    Alterar Senha
                                </Text>
                            </TouchableOpacity>
                            
                            <View 
                                style={{ borderBottomWidth: 1, borderBottomColor: '#E6E6F0', marginBottom: 20 }} 
                            />
                                
                            <Text style={styles.label}>Nome</Text>
                            <Input 
                                placeholder="Nome"
                                value={userData.name}
                                onChangeText={name => {
                                    setUserData({...userData, name});
                                }}
                            />

                            <Text style={styles.label}>Sobrenome</Text>
                            <Input
                                placeholder="Sobrenome"
                                value={userData.last_name}
                                onChangeText={last_name => {
                                    setUserData({...userData, last_name});
                                }}
                            />

                            <Text style={styles.label}>E-mail</Text>
                            <Input 
                                placeholder="E-mail"
                                autoComplete="email"
                                keyboardType="email-address"
                                value={userData.email}
                                onChangeText={email => {
                                    setUserData({...userData, email});
                                }}
                            />

                            <View 
                                style={{ borderBottomWidth: 1, borderBottomColor: '#E6E6F0', marginBottom: 20, marginTop: 40 }} 
                            />

                            <View style={styles.footer}>
                               {!loading ? (
                                    <Button
                                        text="Salvar alterações"
                                        color="#04D361"
                                        enabled={enableButton}
                                        action={handleEditData}
                                    />
                               ): (
                                    <Button
                                        enabled={false}
                                    >
                                        <ActivityIndicator  size="large" color="#6842C2" />
                                    </Button>
                               )}

                                <View style={styles.footerContainer}>
                                    <MaterialIcons name="info" size={24} color="#8257E5" />
                                    
                                    <View style={styles.footerTextContainer}> 
                                        <Text style={styles.footerTitle}>Importante!</Text>
                                        <Text style={styles.footerText}>Preencha todos os dados antes de salvar</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </KeyboardAwareScrollView>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res)} 
                modal={ modal }
            />
        </>

    );
}