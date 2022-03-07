import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

import { SelectPicker } from '../../components/SelectPicker';
import { HeaderBar } from '../../components/HeaderBar';
import { styles } from './styles';

import { tipoEndereco } from '../../utils/categories';
import { tipoLogradouro } from '../../utils/categories';

export function TestePicker(){
  return (
    <View style={styles.container}>
    <StatusBar
       barStyle='light-content'
       backgroundColor='black' 
       translucent
     />

   <HeaderBar title='Página de Teste'/>

   
        <View style={styles.content}>
            <SelectPicker title='Tipo de endereço' categorias={tipoEndereco}/>
            <SelectPicker title='Tipo de endereço' categorias={tipoLogradouro}/>
        </View>
  
    </View>
  );
}       