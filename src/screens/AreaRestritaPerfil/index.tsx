import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Avatar } from '../../components/Avatar';


import { styles } from './styles';
import AvatarPng from '../../assets/avatar.png'

export function AreaRestritaPerfil(){
  return (
    <View style={styles.container}> 
        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
        />
      <View style={styles.content}>
        <Avatar 
           image={AvatarPng}
           name={'Fulano'}
           idCrea={'456978985'}
  
        />    
      </View>
    </View>
  );
}