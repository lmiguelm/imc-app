import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Roboto_400Regular, Roboto_700Bold, Roboto_700Bold_Italic, useFonts } from '@expo-google-fonts/roboto';

import Routes from './src/routes/stacks/index';
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  let [fontsLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  if(!fontsLoader) {
    return <AppLoading/>
  } else {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#6842C2" />
          <AuthProvider>
            <Routes/>
          </AuthProvider>
      </>
    );
  }
}
