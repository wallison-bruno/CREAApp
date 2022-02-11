import React from 'react';

import { View, Text, ScrollView, Image } from 'react-native';

import { HeaderBar } from '../../components/HeaderBar';

import { styles } from './styles';

import { NewsTitle } from '../../components/NewsTitle';
import { NewsBar } from '../../components/NewsBar';
import { theme } from '../../global/theme';
import { ButtonIcon } from '../../components/ButtonIcon';

//Imagens News
import News from '../../assets/news.png'
import NewsTwo from '../../assets/newstwo.png'

//Imagens dos botões
import Alert from '../../assets/alert.png'
import Arrow from '../../assets/rightarrow.png'
import Search from '../../assets/search.png'
import Statistic from '../../assets/statistic.png'
import Authenticate from '../../assets/authenticate.png'
import Counselors from '../../assets/counselors.png'
import About from '../../assets/about.png'
import Links from '../../assets/links.png'
import Directors from '../../assets/directors.png'
import Entities from '../../assets/entities.png'


export function AcessoPublico(){
  return (
      
    <View style={styles.container}>

        <HeaderBar title='Acesso Público'/>

        <Text style={styles.title}>
            Novidades
        </Text>

        {/* CABEI AQUI */}
        
        <ScrollView 
            horizontal
            style={styles.content}  
            showsHorizontalScrollIndicator={false}  
            contentContainerStyle={{ paddingRight: 20}}
        >
            <NewsTitle 
                title='Lorem ipsum dolor sit amet, consecte adipiscing elit.' 
                image={News}
            />
            <NewsTitle 
                title='Lorem ipsum dolor sit amet, consecte adipiscing elit.' 
                image={NewsTwo}
            />
            <NewsTitle 
                title='Lorem ipsum dolor sit amet, consecte adipiscing elit.' 
                image={News}
            />
            <NewsTitle 
                title='Lorem ipsum dolor sit amet, consecte adipiscing elit.' 
                image={NewsTwo}
            />
            

        </ScrollView>    
        
        <View style={styles.newsCircle}>
            <NewsBar />  
        </View>

        <ScrollView 
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
        >
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
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Estatísticas"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Statistic}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Autenticar carteira"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Authenticate}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Conselheiros"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Counselors}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Entidades de classe"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Entities}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Sobre o CREA-CE"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={About}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Links"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Links}
                        iconTwo={Arrow}
                    />
                    <ButtonIcon 
                        style={styles.buttonOne} 
                        color= {theme.colors.darkgray} 
                        title="Diretoria"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconOne={Directors}
                        iconTwo={Arrow}
                    />
            </View>            
        </ScrollView>        
    </View>
  );
}