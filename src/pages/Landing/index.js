import React, {useEffect, useState, useContext} from 'react';
import { View, Text, Image, BackHandler } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Modalize from '../../components/Modalize';
import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Landing() {

    const { navigate } = useNavigation();

    const { signed, signOut } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({});

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);

    function goToHistoricPage() {
        navigate('Historic');
    }

    function goToImcPage() {
        navigate('Imc');
    }

    function gotToProfilePage() {
        navigate('Profile');
    }

    function handleSignOut() {

        setModal({
            color: '#6842C2',
            text: 'Tem certeza que deseja sair?',
            icon: 'info-outline',
            colorIcon: '#04d361',
            button: {
                backgroundColor: '#24EF7F',
                navigate: () => {
                    signOut()
                },
                textButton: 'Sim'
            }
        });
        setShowModal(true);

    }

    return(
        <>
            <LinearGradient 
                colors={['#6842C2', '#774DD6', '#8257E5']}
                style={ styles.container }
            >   
                {signed && (
                    <View style={styles.loggedContainer}>
                        <TouchableOpacity onPress={gotToProfilePage} style={styles.profile}>
                            <Image 
                                style={styles.picture} 
                                source={{ uri: 'https://avatars3.githubusercontent.com/u/47677312?v=4' }}
                            />
                            <Text style={styles.name}>Luis Miguel</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.logout} onPress={handleSignOut}>
                            <Feather name="power" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}

                <Image style={ styles.banner } source={ require('../../assets/landing/batimento-cardiaco.png')} />
            
                <Text style={ styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={ styles.titleBold }>O que deseja fazer? </Text>
                </Text>

                <View style={ styles.buttonsContainer }>
                    <RectButton onPress={goToHistoricPage} style={   [styles.button, styles.buttonPrimary] }>
                        <MaterialIcons name="history" size={35} color="#FFF" />
                        <Text style={ styles.buttonText }>
                            Meu Histórico
                        </Text>
                    </RectButton>

                    <RectButton onPress={goToImcPage}  style={ [styles.button, styles.buttonSecondary] }>
                        <FontAwesome name="heartbeat" size={35} color="#FFF" />
                        <Text style={ styles.buttonText }>
                            Calcular IMC
                        </Text>
                    </RectButton>
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