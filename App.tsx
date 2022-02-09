import React from 'react';

import { StatusBar } from "expo-status-bar";

import { useFonts } from 'expo-font';
import {
    Montserrat_400Regular, 
    Montserrat_500Medium, 
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { Login } from "./src/screens/Login";
import { Routes } from './src/routes';

export default function App() {
  //o vetor vai retornar um valor boolean
  const [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_500Medium,
      Montserrat_700Bold
  });

  //Condição para segurar a Tela de Splash, enquanto a fonte não carregar vai fazer um retorno no Load.
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
        <StatusBar
          style='light' 
          translucent
        />
        <Routes />
    </>
     
  );
}
