import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo.png'
import { Input } from '../../components/Input';


export function Login(){
  return (
    <View style={styles.container}>

        <View style={styles.logo}>
            <Image 
                source={Logo}
            />
        </View>
        
        <View style={styles.content}>
            <Input title='CPF'/>
            <Input title='Senha'/>
        </View>

    </View>
  );
}