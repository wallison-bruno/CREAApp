import React from 'react';
import { View, Text, Image, TextInput, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';

import AvatarPng from '../../assets/avatar.png';
import Search from '../../assets/search.png';
import MicRed from '../../assets/micred.png';
import { ButtonServices } from '../../components/ButtonServices';


export function AreaRestrita(){
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
                name={'Maria'}
                idCrea={123456789}
            />

            <View style={styles.viewInput}> 
              <View style={styles.InputButtons}>
                <RectButton style={styles.buttonLeft}>
                    <Image source={Search}/>
                </RectButton>
                    <TextInput 
                              style={styles.input}
                              placeholder={'Faça uma busca'} 
                    />
                <RectButton style={styles.buttonRight}>
                    <Image source={MicRed}/>
                </RectButton>
              </View>        
          </View>

          <View style={styles.services}>
            <ButtonServices />
          </View>

          

        </View>
    </View>
  );
}