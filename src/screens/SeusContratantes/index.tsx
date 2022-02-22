import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';



import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';


import { styles } from './styles';

import AboutgrayPng from '../../assets/aboutgray.png';
import AddPlusPng from '../../assets/addplus.png';
import { theme } from '../../global/theme';

export function SeusContratantes(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Seus Contratantes'/>
        
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
        
        

        <View style={styles.viewButton}>
            <ButtonIcon
                  style={styles.buttonImage} 
                  color= {theme.colors.milk} 
                  title="Adicionar contratante"
                  fontSize={14}
                  fontFamily={theme.fonts.SemiBold600}
                  iconLeft={AddPlusPng}
                  iconRight={null}
                  borderBottomWidth={0}
                  marginRight={-30}
                  marginLeft={0}
                  paddingLeft={15}
                  marginLeftTitle={0}
            />
            
        </View>

    
        <View>
            <MenuBar /> 
        </View>
               
    </View>
  );
}