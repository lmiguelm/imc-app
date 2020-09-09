import React, {useState} from 'react'
import { View, TextInput } from 'react-native';

import styles from './styles';

export default function Input({ maxLength, keyboardType, icon, placeholder, autoComplete, color, secureTextEntry, value, onChangeText, onfocus }) {
    
    const [focused, setFocused] = useState({});

    return (
        <View style={ [styles.inputBlock, focused] }>
            <TextInput 
                style={ styles.input } 
                placeholder={ placeholder }
                placeholderTextColor={ color || '#9C98A6' }
                autoCompleteType={ autoComplete || 'off' }
                secureTextEntry={ secureTextEntry || false }   
                value={ value }
                onChangeText={ onChangeText }
                onFocus={ () => {
                    setFocused({
                        borderLeftWidth: 4,
                        borderColor: '#8257E5',
                        borderBottomLeftRadius: 8,
                    });
                }}  
                onBlur={() => {
                    setFocused({});
                }}
                keyboardType={keyboardType}
                maxLength={maxLength}              
            />   
            { icon }
        </View>
    )
}
