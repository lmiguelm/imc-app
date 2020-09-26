import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

import Button from '../../components/Button';

import styles from './styles';

export default function Feedback( {route: { params: { title, text, textButton, navigate } }} ) {

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //        return true;
    //     });
    // });

    return (
        <LinearGradient 
            colors={['#6842C2', '#774DD6', '#8257E5']}
            style={ styles.container }
        >
           <LottieView
                style={{
                    width: 300,
                    height: 300,
                }}
                source={require('../../assets/lottie/17470-verified.json')}
                autoPlay
                loop={false}
            />

            <View style={ styles.textContainer }>
                <Text style={ styles.title }>
                    { title }
                </Text>

                <Text style={ styles.text }>
                    { text }
                </Text>
            </View>
    
            <View style={ styles.buttonContainer }>
                {textButton && (
                    <Button
                        text={ textButton }
                        color="#04D361"
                        enabled
                        action={ navigate }
                    />
                )}
            </View>

        </LinearGradient>
    )
}
