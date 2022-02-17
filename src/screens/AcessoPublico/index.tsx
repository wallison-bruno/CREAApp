import React from 'react';

import { View, Text, ScrollView, StatusBar } from 'react-native';

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

        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
        />

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
                        iconLeft={Alert}
                        iconRight={undefined}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={0}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Consultas"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Search}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Estatísticas"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Statistic}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Autenticar carteira"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Authenticate}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Conselheiros"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Counselors}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Entidades de classe"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Entities}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Sobre o CREA-CE"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={About}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Links"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Links}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
                    <ButtonIcon 
                        style={styles.button} 
                        color= {theme.colors.darkgray} 
                        title="Diretoria"
                        fontSize={14}
                        fontFamily={theme.fonts.SemiBold600}
                        iconLeft={Directors}
                        iconRight={Arrow}
                        borderBottomWidth={0}
                        marginRight={50}
                        marginLeft={70}
                        paddingLeft={0}
                        marginLeftTitle={0}
                    />
            </View>            
        </ScrollView>        
    </View>
  );
}