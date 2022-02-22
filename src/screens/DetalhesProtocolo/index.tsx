import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ButtonEnter } from '../../components/ButtonEnter';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function DetalhesProtocolo(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Detalhes do Protocolo'/>

       
        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS */}
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
        </ScrollView>

        <View style={styles.viewButton}>
            <ButtonEnter 
                style={styles.button} 
                title='Despachos' 
                color={theme.colors.milk} 
                fontSize={15} 
                fontFamily={theme.fonts.Bold700}
            /> 

            <ButtonEnter 
                style={styles.button} 
                title='Movimentos' 
                color={theme.colors.milk} 
                fontSize={15} 
                fontFamily={theme.fonts.Bold700}
            /> 
          </View>
        <MenuBar /> 
        
    </View>
  );
}