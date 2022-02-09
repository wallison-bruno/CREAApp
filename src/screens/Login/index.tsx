import React from 'react';
import { View, Image, ScrollView, Text} from 'react-native';

import { StatusBar } from 'react-native';
import { Input } from '../../components/Input';
import { Check } from '../../components/CheckBox';

import { styles } from './styles';

import Logo from '../../assets/logo.png'
import Public from '../../assets/public.png'
import { ButtonEnter } from '../../components/ButtonEnter';



export function Login(){
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

          <StatusBar
            barStyle='light-content'
            backgroundColor='transparent' 
            translucent
          />

          <View style={styles.logo}>
              <Image 
                  source={Logo}
              />
          </View>
          
          <View style={styles.content} >
              <Input title='CPF'/>
              <Input title='Senha'/>
              <Check />
          </View> 

          <View style={styles.recoverPassword}>
            <Text style={styles.titleRecover}>Esqueceu a senha?</Text>

            {/* Aqui é um link */}
            <Text style={styles.linkRecover}>Clique Aqui</Text>
          </View>

          <View style={styles.button}>
            <ButtonEnter title='Entrar'/>
          </View>
          
          {/* Aqui é um link */}
          <View style={styles.public}>
              <Image source={Public} style={styles.imagePublic}/>
              <Text style={styles.titlePublic}>Ambiente público</Text>
          </View>
        
    </ScrollView>
  );
}