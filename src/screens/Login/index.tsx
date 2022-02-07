import React from 'react';
import { View, Image, Text
 } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Logo from '../../assets/logo.png'
import { Input } from '../../components/Input';
import { Check } from '../../components/CheckBox';
import { theme } from '../../global/theme';


export function Login(){

  const ButtonEye = () => (
      <RectButton activeOpacity={0.5} >
          <Ionicons 
            style={styles.eye}
            name='eye' 
            size={24} 
            color={theme.colors.secondary20}
          />
      </RectButton> 
  );

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
              <ButtonEye/> 
          </View> 

          <View style={styles.checkbox}>
            <Check />
          </View>
        

    </View>
  );
}