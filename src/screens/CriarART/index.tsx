import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { InputTextIcon } from '../../components/InputTextIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';
import { ButtonGuides } from '../../components/ButtonGuides';

import { styles } from './styles';

import Mic from '../../assets/micred.png';
import SearchBlack from '../../assets/searchblack.png';

export function CriarART(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Criar ART'/>

        <ButtonGuides 
            titleLeft='Obra/Serviço' titleRight='Cargo/Função'
        />

        
       
        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS E BOTÕES*/}
                <Text>Conteúdo</Text>
                <Text>Botões</Text>
        </ScrollView>

        
        <MenuBar />        
    </View>
  );
}