import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Input from '../../Input';
import Button from '../../Button';

import { validateEmail } from '../../../utils/email';

import styles from '../styles';

export default function index({ goToLoginPage, submitForm, back, name, callback }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    callback(email, password, confirmPass);
    if (validateEmail(email) && password.length >= 5 && confirmPass === password) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [email, password, confirmPass]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.header}>
        <BorderlessButton onPress={goToLoginPage}>
          <Ionicons name="arrow-back" size={24} color="#32264D" />
        </BorderlessButton>

        <View style={styles.progress}>
          <BorderlessButton onPress={back}>
            <FontAwesome name="circle-o" style={{ marginRight: 20 }} size={13} color="#32264D" />
          </BorderlessButton>

          <FontAwesome name="circle" size={13} color="#32264D" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Quase lá{name && `, ${name}`} !!</Text>

        <Text style={styles.text}>
          Informe seu email e senha. Lembrando que a senha deve conter no minímo 5 caracteres.
        </Text>
      </View>

      <Text style={styles.info}>02. Email e Senha</Text>

      <View style={styles.inputGroup}>
        <Input
          placeholder="E-mail"
          autoComplete="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          icon={<Entypo name="mail" size={20} color="#c1bccc" />}
        />

        <Input
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(value) => setPassword(value)}
          icon={
            <BorderlessButton onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Entypo name="eye-with-line" size={20} color="#774DD6" />
              ) : (
                <Entypo style={styles.icon} name="eye" size={20} color="#c1bccc" />
              )}
            </BorderlessButton>
          }
        />

        <Input
          placeholder="Digite a senha novamente"
          secureTextEntry={!showPassword}
          value={confirmPass}
          onChangeText={(value) => setConfirmPass(value)}
          icon={
            <BorderlessButton onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Entypo name="eye-with-line" size={20} color="#774DD6" />
              ) : (
                <Entypo style={styles.icon} name="eye" size={20} color="#c1bccc" />
              )}
            </BorderlessButton>
          }
        />

        <Button text="Concluir" color="#04d361" action={submitForm} enabled={enableButton} />
      </View>
    </KeyboardAvoidingView>
  );
}
