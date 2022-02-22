import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { InputTextIcon } from '../../components/InputTextIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';
import { ButtonGuides } from '../../components/ButtonGuides';

import { styles } from './styles';

import Mic from '../../assets/micred.png';
import SearchBlack from '../../assets/searchblack.png';
import Arts from '../../assets/arts.png';
import { ButtonEnter } from '../../components/ButtonEnter';
import { theme } from '../../global/theme';

export function SuasCATs(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Suas CATs'/>

        <View style={styles.input}>
            <InputTextIcon
                title=''
                name='Insira o número da ART'
                iconLeft={SearchBlack}
                iconRight={Mic}
                width={345}
                height={48}
                marginLeft={17}
                marginRight={20}
            />
            <Text>Conteúdo</Text>
        </View>

        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS */}
                {/* AQUI É O CONTEÚDO */}
        </ScrollView>

        
        <View>
            <MenuBar /> 
        </View>
               
    </View>
  );
}