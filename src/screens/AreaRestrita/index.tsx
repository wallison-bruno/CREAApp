import React from 'react';
import { View, Text, Image, TextInput, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';

import { ButtonServices } from '../../components/ButtonServices';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/theme';

import AvatarPng from '../../assets/avatar.png';
import Search from '../../assets/search.png';
import MicRed from '../../assets/micred.png';
import Interrogation from '../../assets/interrogation.png';
import Message from '../../assets/message.png';
import Cardette from '../../assets/cardette.png';
import RightArrowGray from '../../assets/rightarrowgray.png'
import { MenuBar } from '../../components/MenuBar';


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
                idCrea={'12345789'}
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

          <View>
            <ButtonServices />
          </View>

          <View style={styles.viewPlus}>
            <Text style={styles.titlePlus}>
                Mais
            </Text>

            <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title="ART Online"
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={Interrogation}
                iconRight={RightArrowGray}
                borderBottomWidth={1}
                marginRight={160}
                marginLeft={150}
                paddingLeft={0}
                marginLeftTitle={-70}
            />

            <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title="Fale com a gente"
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={Message}
                iconRight={RightArrowGray}
                borderBottomWidth={1}
                marginRight={160}
                marginLeft={150}
                paddingLeft={0}
                marginLeftTitle={-70}
            />

            <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title="Sobre o CREA"
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={Cardette}
                iconRight={RightArrowGray}
                borderBottomWidth={1}
                marginRight={160}
                marginLeft={150}
                paddingLeft={0}
                marginLeftTitle={-70}
            />
          </View>

        </View>
            
              <MenuBar/>
            
    </View>
  );
}