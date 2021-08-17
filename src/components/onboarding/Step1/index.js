import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import styles from '../styles';

export default function Step1({ next, back }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#6842C2', '#774DD6', '#8257E5']} style={styles.header}>
        <LottieView
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../../../assets/lottie/138-star.json')}
          autoPlay
          speed={0.4}
          loop={false}
        />
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>01.</Text>

          <Text style={styles.text}>Calcule seu índice de massa corporal (IMC) quando quiser.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.step}>
          <FontAwesome name="circle" style={{ marginRight: 20 }} size={20} color="#32264D" />

          <BorderlessButton onPress={() => next(2)}>
            <FontAwesome name="circle-o" size={20} color="#32264D" />
          </BorderlessButton>
        </View>

        <View style={styles.next}>
          <BorderlessButton onPress={() => next(2)}>
            <Ionicons name="arrow-forward" size={40} color="#32264D" />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}
