import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from "react-native-picker-select";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeaderBar } from '../../components/HeaderBar';
import { InputText } from '../../components/InputText';
import { SelectPicker } from '../../components/SelectPicker';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { Radio } from '../../components/Radio';

export function Denuncia(){
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.container}>     
        
        <HeaderBar title='Denúncia'/>

          <View style={styles.data}>
          
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

          <View style={styles.data}>
          
            <View style={styles.viewTitleID}>
              <Text style={styles.titleID}>
                  Dados do Denunciado
              </Text>
                <MaterialCommunityIcons
                  name='information'
                  size={16}
                  color= {theme.colors.primary}
                /> 
            </View>
            
              <Radio title1='Profissional' title2='Empresa'/>
            
              <InputText
                title='Nome:'
                textAlign='left'
              />
              <InputText
                title='CPF:'
                textAlign='left'
              />   
          </View> 

          <View style={styles.data}>
          
            <View style={styles.viewTitleID}>
              <Text style={styles.titleID}>
                Endereço da Denúncia
              </Text> 
            </View>
           <SelectPicker />  

          </View>
    </View>
    </ScrollView>
   
  );
}