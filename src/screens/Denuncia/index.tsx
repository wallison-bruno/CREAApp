import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeaderBar } from '../../components/HeaderBar';
import { InputTextIcon } from '../../components/InputTextIcon';
import { InputText } from '../../components/InputText';
import { SelectPicker } from '../../components/SelectPicker';
import { Radio } from '../../components/Radio';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/theme';

import  Mic from '../../assets/mic.png';
import SearchRed from '../../assets/searchred.png'
import AddImage from '../../assets/addimage.png'
import Alert from '../../assets/alerttwo.png'

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

              {/* VER OUTROS TIPOS DE PICKERS */}
            <SelectPicker title='Tipo de endereço'/>
            <SelectPicker title='Tipo de logradouro'/>

              <InputText
                title='Logradouro::'
                textAlign='left'
              />
              <InputText
                title='Complemento::'
                textAlign='left'
              />
              <InputText
                title='Número::'
                textAlign='left'
              />
              <InputText
                title='Bairro:'
                textAlign='left'
              />
              <InputTextIcon
                title='Cidade:'
                name='Pesquise pela cidade'
                iconLeft={SearchRed}
                iconRight={Mic}
              />
              <InputText
                title='UF:'
                textAlign='left'
              />
          </View>

              <View style={styles.data}>
                <View style={styles.viewTitleID}>
                    <Text style={styles.titleID}>
                      Descreva sua denúncia
                    </Text> 
                </View>
              <SelectPicker title='Tipo de denúncia:'/>

              <Text style={styles.titleDescribe}>
                  Fato denunciado:
              </Text>
              <TextInput
              //Ajeitar o placeholder
              style={styles.inputDescribe} 
              placeholder={`Descreva sua denúncia com o máximo ${'\n'} de detalhes possível.`}
              />
              <Text style={styles.titleObservation}>
                  Observação:
              </Text>
              <TextInput
              //Ajeitar o placeholder
              style={styles.inputObservation} 
              placeholder={`Observação`}
              />
          </View> 

          <View style={styles.data}>
                <View style={styles.viewTitleID}>
                    <Text style={styles.titleID}>
                      Imagens (opcional)
                    </Text> 
                </View>

                <ButtonIcon
                  style={styles.buttonImage} 
                  color= {theme.colors.milk} 
                  title="Adicionar fotos"
                  fontSize={14}
                  fontFamily={theme.fonts.Medium500}
                  iconLeft={AddImage}
                  iconRight={null}
                />

          </View>    
                <ButtonIcon
                  style={styles.buttonAlert} 
                  color= {theme.colors.milk} 
                  title="DENUNCIAR"
                  fontSize={14}
                  fontFamily={theme.fonts.Bold700}
                  iconLeft={Alert}
                  iconRight={null}
                />      
    </View>
    </ScrollView>
   
  );
}