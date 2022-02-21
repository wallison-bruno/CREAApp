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

export function SuasARTs(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Suas ARTs'/>

        <ButtonGuides 
            titleLeft='Registradas' titleRight='Pendentes'
        />

        <View style={styles.input}>
            <InputTextIcon
                title=''
                name='Número, assunto ou data'
                iconLeft={SearchBlack}
                iconRight={Mic}
                width={345}
                height={48}
                marginLeft={17}
                marginRight={20}
            />
        </View>

        
       
        <ScrollView style={styles.content}>
                {/* FALTANDO OS CONTEÚDOS */}
                <Text>Conteúdo</Text>
        </ScrollView>

        
        <MenuBar />        
    </View>
  );
}