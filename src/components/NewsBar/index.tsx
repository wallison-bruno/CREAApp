import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import iconNext from '../../assets/iconNext.png'
import { Circle } from '../Circle';

export function NewsBar(){
  return (
    <View style={styles.container}>   
    {/* Faltando os ícones de bolinhas que rola quando passa imagem */}
        <View style={styles.barPlus}>
            <View style={styles.circle}>
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
            </View>
            <View style={styles.plus}>
                <Text style={styles.titlePlus}>Ver mais</Text>
                <Image style={styles.imgPlus} source={iconNext} />
            </View>
        </View>
        
    </View>
  );
}