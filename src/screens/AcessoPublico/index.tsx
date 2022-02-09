import React from 'react';

import { StatusBar, View, Text } from 'react-native';
import { HeaderBar } from '../../components/HeaderBar';

import { styles } from './styles';

export function AcessoPublico(){
  return (
    <View style={styles.container}>
        <StatusBar 
            barStyle='light-content'
            backgroundColor='black'
        />

        <HeaderBar title='Acesso Público'/>

        <Text style={styles.title}>
            Novidades
        </Text>

    </View>
  );
}