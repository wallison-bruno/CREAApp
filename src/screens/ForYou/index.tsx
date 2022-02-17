import React from 'react';
import { View, StatusBar } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { theme } from '../../global/theme';

import { styles } from './styles';
import OrangeAnnuityPng from '../../assets/orangeannuity.png';
import OrangeFinancialPng from '../../assets/orangefinancial.png';
import OrangePersonalPng from '../../assets/orangepersonaldata.png';
import OrangeRpnPng from '../../assets/orangerpn.png';
import { MenuBar } from '../../components/MenuBar';

export function ForYou(){
  return (
    <View style={styles.container}>

        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />

        <HeaderBar title='Para você'/>

        <View style={styles.content}>
            

        <View style={styles.viewButtonTop}>
           <ButtonIcon 
                style={styles.button} 
                color= {theme.colors.darkgray} 
                title={` Dados \n Pessoais`}
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
                title={` e-RNP`}
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
                title={` Financeiro`}
                fontSize={12}
                fontFamily={theme.fonts.SemiBold600}
                iconLeft={OrangeFinancialPng}
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
                title={` Anuidade`}
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