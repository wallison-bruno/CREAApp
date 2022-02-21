import React from 'react';
import { View, StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { MenuBar } from '../../components/MenuBar';

import { theme } from '../../global/theme';
import { styles } from './styles';

import OrangeAnnuityPng from '../../assets/orangeannuity.png';
import OrangePersonalPng from '../../assets/orangepersonaldata.png';
import OrangeRpnPng from '../../assets/orangerpn.png';
import OrangefinancialPng from '../../assets/orangefinancial.png';


export function ARTOnline(){
  return (
    <View style={styles.container}>

        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='ART Online'/>

        <View style={styles.content}>
            

        <View style={styles.viewButtonTop}>
           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Suas ARTs `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangePersonalPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
            /> 

           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Criar ART `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangeRpnPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
           />
        </View>

        <View style={styles.viewButtonBottom}>
           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Placa de Obra `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangefinancialPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
            /> 

           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Suas CATs `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangeAnnuityPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
           />
        </View>

        <View style={styles.viewButtonBottom}>
           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Contratantes `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangefinancialPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
            /> 

           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Proprietários `}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangeAnnuityPng}
                iconRight={null}
                borderBottomWidth={0}
                marginRight={-170}
                marginLeft={0}
                paddingLeft={20}
                marginLeftTitle={65}
           />
        </View>

        </View>

        <View>
              <MenuBar />
        </View>
    </View>
  );
}