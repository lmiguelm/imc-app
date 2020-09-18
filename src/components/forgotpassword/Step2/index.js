import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import Button from '../../Button';
import Modalize from '../../Modalize';

import api from '../../../services/api';

import styles from './styles';


export default function Step2({email, callback}) {
    const CELL_COUNT = 6;

    const [loading, setLoading] = useState(false);
    const [enableButton, setEnableButton] = useState(false);
    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [enableLink, setEnableLink] = useState(false);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if(value.length === 6) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }, [value]);

    async function resendCode() {
        try {
            setEnableLink(true);
            await api.post('auth/forgotPassword', {
                email
            });

            setModal({
                color: '#04D361',
                text: 'Código enviado com sucesso.',
                icon: 'check'
            });
            setShowModal(true);

            setTimeout(() => {
                setEnableLink(false);
            }, 300000);

        } catch (e) {
            setModal({
                color: '#ff0000',
                text: e.response.data.message,
                icon: 'error'
            });
            setShowModal(true);
        }
    }

    async function nextStep() {
        setLoading(true);

        try {
            const user = await api.post('/auth/authenticateCode', {
                code: value
            });
            callback(3, user.data.id);
        } catch (e) {
            setLoading(false);
            setModal({
                color: '#ff0000',
                text: e.response.data.message,
                icon: 'error'
            });
            setShowModal(true);
        } 
    }

    function goBack() {
        callback(1);
    }

    return(
        <>
            <KeyboardAvoidingView  behavior="position" style={styles.container}>
                <View style={ styles.header }>
                    <BorderlessButton onPress={goBack} >
                        <Ionicons name="md-arrow-round-back" size={24} color="#32264D" />
                    </BorderlessButton>
                    
                    
                    <View style={ styles.progress }>
                        <FontAwesome name="circle" style={{ marginRight: 20 }} size={13} color="#32264D" />
                        <FontAwesome name="circle-o" size={13} color="#32264D" />
                    </View>
                </View>

                <View style={ styles.content}> 
                    <Text style={ styles.title }>
                        Enviamos um código para seu e-mail
                    </Text>

                    <Text style={ styles.text }>
                        Informe o código de 6 digitos que foi enviado para {email} para
                        prosseguir...
                    </Text>

                <TouchableOpacity disabled={enableLink} onPress={resendCode}>
                       {enableLink ? (
                            <Text style={ [styles.linkText, { color: '#9C98A6' }] }>
                                Aguarde 5 minutos para solicitar outro código...
                            </Text>
                       ): (
                            <Text style={ styles.linkText }>
                                Solicitar outro código
                            </Text>
                       )}
                </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    )}
                />

                    {!loading ? (
                        <Button
                            text="Prosseguir"
                            enabled={enableButton}
                            color="#774DD6"
                            action={nextStep}
                        />
                    ):(
                        <Button>
                            <ActivityIndicator  size="large" color="#6842C2" />
                        </Button>
                    )}

                </View>
            </KeyboardAvoidingView>

            <Modalize
                open={ showModal }
                callback={ res => setShowModal(res) } 
                modal={ modal }
            />
        </>
    );
}