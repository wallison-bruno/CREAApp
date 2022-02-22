import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ButtonGuides } from '../../components/ButtonGuides';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';
import { InputTextIcon } from '../../components/InputTextIcon';

import Mic from '../../assets/micred.png';
import SearchBlack from '../../assets/searchblack.png';

import { styles } from './styles';

export function SeusProtocolos(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Seus Protocolos'/>

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
        
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false} >
                {/* FALTANDO OS CONTEÚDOS */}
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
                <View style={styles.conteudo}>
                  <Text>Aqui é conteudo do component de detalhes de certificação</Text>
                </View>
        </ScrollView>

        <MenuBar /> 
        
    </View>
  );
}