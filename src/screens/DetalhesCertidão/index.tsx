import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';



import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';


import { styles } from './styles';

import AboutgrayPng from '../../assets/aboutgray.png';
import PdfPng from '../../assets/pdf.png';
import { theme } from '../../global/theme';

export function DetalhesCertidao(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Detalhes da Certidão'/>
        
        <View style={styles.conteudo}>
          <Text>Aqui é conteudo do component de detalhes de certificação</Text>
        </View>
        

        <View style={styles.viewButton}>
            <ButtonIcon
                  style={styles.buttonImage} 
                  color= {theme.colors.milk} 
                  title="Ver documento"
                  fontSize={14}
                  fontFamily={theme.fonts.SemiBold600}
                  iconLeft={PdfPng}
                  iconRight={null}
                  borderBottomWidth={0}
                  marginRight={-85}
                  marginLeft={0}
                  paddingLeft={45}
                  marginLeftTitle={0}
            />

          <View style={styles.info}>
            <Image source={AboutgrayPng}/>
            <Text style={styles.infotitle}>
              Informação
            </Text>
          </View>
          <Text style={styles.infotext}>
              Esta certidão perderá a validade, caso ocorra qualquer alteração posterior dos elementos cadastrais nela contidos.
          </Text>
            
        </View>


        
        <View>
            <MenuBar /> 
        </View>
               
    </View>
  );
}