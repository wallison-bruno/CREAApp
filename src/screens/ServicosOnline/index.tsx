import React from 'react';
import { View, StatusBar } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderBar } from '../../components/HeaderBar';
import { theme } from '../../global/theme';

import { styles } from './styles';
import OrangeAnnuityPng from '../../assets/orangeannuity.png';
import OrangePersonalPng from '../../assets/orangepersonaldata.png';
import { MenuBar } from '../../components/MenuBar';

export function ServicosOnline(){
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
                title={` Demanda de \n Fiscalização `}
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
                title={` Suas CRQs `}
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
                title={` Seus \n Protocolos `}
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
                title={` Autenticar \n Carteira `}
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