import React from 'react';

import { StatusBar, View, Text, ScrollView, Image } from 'react-native';

import { HeaderBar } from '../../components/HeaderBar';

import { styles } from './styles';

import { NewsTitle } from '../../components/NewsTitle';
import { NewsBar } from '../../components/NewsBar';
import { theme } from '../../global/theme';
import { ButtonIcon } from '../../components/ButtonIcon';

import Alert from '../../assets/alert.png'
import Arrow from '../../assets/rightarrow.png'
import Search from '../../assets/search.png'

 
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
            style={styles.newsTitle}  
            showsHorizontalScrollIndicator={false}  
            contentContainerStyle={{ paddingRight: 10 }}
        >
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>
            <NewsTitle title='Lorem ipsum dolor sit amet, consecte adipiscing elit.'/>

        </ScrollView>    
        
        <View style={styles.newsCircle}>
            <NewsBar />  
        </View>

          <View style={styles.viewButton}>
          <ButtonIcon 
                style={styles.buttonAlert} 
                color= {theme.colors.milk} 
                title="Nova denúncia"
                fontSize={14}
                fontFamily={theme.fonts.SemiBold600}
                iconOne={Alert}
                iconTwo={undefined}
          />
          <ButtonIcon 
                style={styles.buttonOne} 
                color= {theme.colors.darkgray} 
                title="Consultas"
                fontSize={14}
                fontFamily={theme.fonts.SemiBold600}
                iconOne={Search}
                iconTwo={Arrow}
          />
          

          </View>
        

    </View>
  );
}