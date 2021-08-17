import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Input from '../../Input';
import Button from '../../Button';

import styles from '../styles';

export default function Step1({ nextStep, goToLoginPage, callback }) {
  const [enableButton, setEnableButton] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    callback(name, lastName);

    if (name.length >= 5 && lastName.length >= 5) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [name, lastName]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.header}>
        <BorderlessButton onPress={goToLoginPage}>
          <Ionicons name="arrow-back" size={24} color="#32264D" />
        </BorderlessButton>

        <View style={styles.progress}>
          <FontAwesome name="circle" style={{ marginRight: 20 }} size={13} color="#32264D" />
          <FontAwesome name="circle-o" size={13} color="#32264D" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Crie sua conta gratuíta</Text>

        <Text style={styles.text}>Basta apenas você preencher os campos com seus dados.</Text>
      </View>

      <Text style={styles.info}>01. Quem é você?</Text>

      <View style={styles.inputGroup}>
        <Input placeholder="Nome" value={name} onChangeText={(value) => setName(value)} />

        <Input
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={(value) => setLastName(value)}
        />

        <Button text="Próximo" color="#8257E5" action={nextStep} enabled={enableButton} />
      </View>
    </KeyboardAvoidingView>
  );
}
