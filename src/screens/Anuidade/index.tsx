import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ButtonGuides } from '../../components/ButtonGuides';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';

import Okgray from '../../assets/okgray.png';
import { styles } from './styles';

export function Anuidade(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Anuidade'/>

        <ButtonGuides titleLeft='Em aberto' titleRight='Pagos'/>


        {/* AQUI VAI TER UMA CONDIÇÃO SE CASO NENHUM BOLETO ESTEJA EM ABERTO */}
        <View style={styles.gratters}>
            <Image source={Okgray}/>
            <Text style={styles.textOne}>
                Parabéns!
            </Text>
            <Text style={styles.textTwo}>
                Você não possui boletos em aberto.
            </Text>
        </View>

        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS */}
        </ScrollView>

        <MenuBar /> 
        
    </View>
  );
}