import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ButtonGuides } from '../../components/ButtonGuides';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';

import QuestionGray from '../../assets/questiongray.png';
import { styles } from './styles';

export function CQRs(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Suas CQRs'/>

        <ButtonGuides titleLeft='Válidas' titleRight='Vencidas'/>


        {/* AQUI VAI TER UMA CONDIÇÃO SE CASO NENHUM BOLETO ESTEJA EM ABERTO */}
        <View style={styles.gratters}>
            <Image source={QuestionGray}/>
            <Text style={styles.textOne}>
                Sem resultados!
            </Text>
            <Text style={styles.textTwo}>
               {`Não foram encontrados resultados para \n a sua consulta.`} 
            </Text>
        </View>

        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS */}
        </ScrollView>

        <MenuBar /> 
        
    </View>
  );
}