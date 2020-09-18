import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

import styles from './styles';

export default function Loading() {
    return(
        <LinearGradient 
                colors={['#6842C2', '#774DD6', '#8257E5']}
                style={ styles.container }
            >   
                <LottieView
                    source={require('../../assets/lottie/33135-copied.json')}
                    autoPlay
                    style={{
                        width: 130,
                        height: 130,
                    }}
                    loop
                />
                <Text style={ styles.text }>Carregando...</Text>
        </LinearGradient>
    );
}