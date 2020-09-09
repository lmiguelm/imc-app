import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';

import logo from '../../assets/logo/imc.png';

import styles from './styles';

export default function Header({title, children, headerRight}) {

    const { navigate } = useNavigation();

    function goToLandingPage(){
        navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar} >
                <BorderlessButton onPress={goToLandingPage}>
                    <Ionicons name="md-arrow-round-back" size={24} color="#fff" />
                </BorderlessButton>

                <View style={ styles.iconContainer}>
                    <TouchableOpacity onPress={goToLandingPage}>
                        <Image source={logo} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={ styles.iconText}>IMC</Text>
                </View>
            </View>
            
            <View style={styles.header}>
                <Text style={styles.title} >{title}</Text>
                {headerRight}
            </View>
            

            {children}
        </View>
    );
}