import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


import styles from '../styles';

export default function Step1({ back }) {

    const { navigate } = useNavigation();

    function goToLoginPage() {
        navigate('Login');
    }

    return (
        <View style={ styles.container }>
            <LinearGradient colors={['#6842C2', '#774DD6', '#8257E5']} style={ styles.header }>
                <LottieView
                    style={{
                        width: 350,
                        height: 350,
                    }}
                    source={require('../../../assets/lottie/711-history-btn.json')}
                    autoPlay
                    speed={0.4}
                    loop={false}
                />
            </LinearGradient>

            <View style={ styles.content }>
               <View style={ styles.textContainer }>
                    <Text style={ styles.title }>
                        02.
                    </Text>

                    <Text style={ styles.text }>
                       Salve seus resultados e consulte-os quando quiser.
                    </Text>
               </View>
            </View>

            <View style={ styles.footer }>
                    <View style={ styles.step }>
                        <BorderlessButton onPress={ () => back(1) }>
                            <FontAwesome name="circle-o"style={{ marginRight: 20 }} size={20} color="#32264D" />
                        </BorderlessButton>

                        <FontAwesome name="circle" size={20} color="#32264D" />
                    </View>

                    <View style={ styles.next }>
                        <BorderlessButton onPress={ goToLoginPage }>
                            <Ionicons name="md-arrow-round-forward" size={40} color="#32264D" />
                        </BorderlessButton>
                    </View>
               </View>
        </View>
    )
}
