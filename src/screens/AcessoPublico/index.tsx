import React from 'react';

import { StatusBar, View, Text, ScrollView, Image } from 'react-native';

import { HeaderBar } from '../../components/HeaderBar';

import { styles } from './styles';

import iconNext from '../../assets/iconNext.png'
import { NewsTitle } from '../../components/NewsTitle';
 
export function AcessoPublico(){
  return (
    <View style={styles.container}>
        <StatusBar 
            barStyle='light-content'
            backgroundColor='black'
        />

        <HeaderBar title='Acesso Público'/>

        <Text style={styles.title}>
            Novidades
        </Text>

        <ScrollView 
            horizontal
            style={styles.newstitle}  
            showsHorizontalScrollIndicator={false}  
            contentContainerStyle={{ paddingRight: 10 }}
        >
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            
        </ScrollView>      

        {/* Faltando os icones de bolinhas que rola quando passa imagem */}
        <View style={styles.plus}>
            <Text style={styles.titlePlus}>Ver mais</Text>
            <Image style={styles.imgPlus} source={iconNext} />
        </View>
        

    </View>
  );
}