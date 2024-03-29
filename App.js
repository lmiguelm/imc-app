import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes/stacks/index';

import { AuthProvider } from './src/contexts/auth';
import { ImcProvider } from './src/contexts/imc';

export default function App() {
  let [fontsLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#6842C2" />
        <AuthProvider>
          <ImcProvider>
            <Routes />
          </ImcProvider>
        </AuthProvider>
      </>
    );
  }
}
