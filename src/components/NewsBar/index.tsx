import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import iconNext from '../../assets/iconNext.png'
import { Circle } from '../Circle';

interface Props {
  length: number;
}

//SERA REITERADO 

export function NewsBar({length = 1} : Props){
  
  function handleCircle(length: number) {
      let circle = [ ];

      for (let i = 0; i < length; i++) {
          circle.push(
            <Circle key={i}/>
          )
      }
          return circle;
  }

  return (
    <View style={styles.container}>   
    {/* Faltando os ícones de bolinhas que rola quando passa imagem */}
        <View style={styles.barPlus}>
            <View style={styles.circle}>
            {
              handleCircle
            }
            </View>
            <View style={styles.plus}>
                <Text style={styles.titlePlus}>Ver mais</Text>
                <Image style={styles.imgPlus} source={iconNext} />
            </View>
        </View>
        
    </View>
  );
}