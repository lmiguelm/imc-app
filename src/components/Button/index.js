import React from 'react'
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

export default function Button({ children, text, action, color, enabled }) {
    return (
        <RectButton 
            onPress={ action }
            style={[styles.submitButton, { backgroundColor: enabled ? color : '#DCDCE5' }]}
            enabled={ enabled }            
        >
            {text && (
                <Text style={[styles.submitButtonText, { color: enabled ? '#fff' : '#9C98A6' } ]}>
                    { text }
                </Text>
            )}

            {children}

        </RectButton>
    )
}
