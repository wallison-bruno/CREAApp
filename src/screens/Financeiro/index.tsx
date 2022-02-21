import React from 'react';
import { View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonGuides } from '../../components/ButtonGuides';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';

import { styles } from './styles';

export function Financeiro(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Financeiro'/>

        <ButtonGuides titleLeft='Em aberto' titleRight='Pagos'/>

        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEUDOS */}
        </ScrollView>
        
        <MenuBar />
    </View>
  );
}