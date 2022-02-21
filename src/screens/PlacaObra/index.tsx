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

export function PlacaObra(){
  return (
    <View style={styles.container}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Placa de Obra'/>

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

            {/* AQUI TEM UMA CONDICIONAL */}
        <View style={styles.gratters}>
            <Image source={Arts}/>
            <Text style={styles.textOne}>
                {`Adicione suas ARTs para gerar uma placa \n  de identificação de obra.`} 
            </Text>
        </View>

            {/* MÚLTIPLAS TELAS COM CONDICIONAIS */}

        <View style={styles.viewButton}>
            <ButtonEnter 
                style={styles.buttonOne} 
                title='Gerar placa' 
                color={theme.colors.milk} 
                fontSize={15}
                fontFamily={theme.fonts.Bold700}
            />
        </View>
        <View style={styles.menubar}>
            <MenuBar /> 
        </View>
               
    </View>
  );
}