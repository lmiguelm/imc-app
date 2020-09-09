import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles'

export default function DeleteItem() {

    return(
        <View style={ styles.container }>
            <MaterialIcons style={{ marginLeft: 15 }} name="delete-forever" size={50} color="#fff" />
            <Text style={ styles.text }>Remover  </Text>
        </View>
    );
}

