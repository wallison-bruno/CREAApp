import React from 'react';
import { View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeaderBar } from '../../components/HeaderBar';
import { InputText } from '../../components/InputText';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function Denuncia(){
  return (
    <View style={styles.container}>     
        
        <HeaderBar title='Denúncia'/>

        <View style={styles.content}>
          
            <View style={styles.viewTitleID}>
              <Text style={styles.titleID}>
                  Sua identificação
              </Text>
                <MaterialCommunityIcons
                  name='information'
                  size={16}
                  color= {theme.colors.primary}
                />
            </View>
              <InputText
                title='CPF:'
                textAlign='left'
              />
              <InputText
                title='Nome Completo:'
                textAlign='left'
              />
              <InputText
                title='E-mail:'
                textAlign='left'
              />
              <InputText
                title='Telefone:'
                textAlign='left'
              />
          </View>    
        
    
    </View>
  );
}