import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

export default function ImcInfo({ imc, title, level, color, emoji }) {
    return(
        <View style={ [styles.container, { backgroundColor: color }] }>
           <Text style={ styles.title }>{ title }</Text>

           <View style={ styles.contentContainer }>
                <View style={ styles.iconContainer }>
                    <Entypo name={ emoji } size={100} color="#fff" />
                </View>

                <View style={ styles.infoContainer }>
                    <Text style={ styles.text }>{ imc }</Text>
                </View>
           </View>
        </View>
    );
}