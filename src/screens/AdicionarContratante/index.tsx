import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
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
import SearchRed from '../../assets/searchred.png';
import AddPlusPng from '../../assets/addplus.png';
import { MenuBar } from '../../components/MenuBar';

export function AdicionarContratante(){
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.container} >  

        <StatusBar
              barStyle='light-content'
              backgroundColor='black' 
              translucent
        />   
        
        <HeaderBar title='Adicionar Contratante'/>

            <View style={styles.field}>
              
              <View style={styles.viewTitleID}>
                <Text style={styles.titleID}>
                  Tipo de Contratante
                </Text>
              </View>
              
                <Radio title1='Nacional' title2='Estrangeira'/>
                
            </View> 

          <View style={styles.field}>
          
            <View style={styles.viewTitleID}>
              <Text style={styles.titleID}>
                  Dados Pessoais
              </Text>

            </View>
              <InputText
                title='CPF:'
                textAlign='left'
              />
              <InputText
                title='Nome Completo:'
                textAlign='left'
              />
              <Text style={styles.sexo}>Sexo:</Text>
              <Radio title1='Masculino' title2='Feminino'/>
              <InputText
                title='E-mail:'
                textAlign='left'
              />
          </View>

          <View style={styles.field}>
          
            <View style={styles.viewTitleID}>
              <Text style={styles.titleID}>
                  Endereço
              </Text>
                <MaterialCommunityIcons
                  name='information'
                  size={16}
                  color= {theme.colors.primary}
                /> 
            </View>
            
              <Radio title1='Profissional' title2='Empresa'/>
            
              <InputText
                title='CEP:'
                textAlign='left'
              />
              <SelectPicker title='Tipo de endereço'/>
              <SelectPicker title='Tipo de logradouro'/>
              <InputText
                title='Logradouro:'
                textAlign='left'
              />  
              <InputText
                title='Complemento:'
                textAlign='left'
              /> 
              <InputText
                title='Número:'
                textAlign='left'
              /> 
              <InputText
                title='Bairro:'
                textAlign='left'
              /> 
          </View> 

          <View style={styles.field}>
          
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
                width={309}
                height={48}
                marginLeft={17}
                marginRight={-20}
              />
              <InputText
                title='UF:'
                textAlign='left'
              />
              <InputText
                title='Telefone:'
                textAlign='left'
              />
          </View>

                <ButtonIcon
                  style={styles.buttonImage} 
                  color= {theme.colors.milk} 
                  title="Cadastrar"
                  fontSize={14}
                  fontFamily={theme.fonts.SemiBold600}
                  iconLeft={AddPlusPng}
                  iconRight={null}
                  borderBottomWidth={0}
                  marginRight={-85}
                  marginLeft={0}
                  paddingLeft={45}
                  marginLeftTitle={0}
                />   
    </View>
      
      <MenuBar />

    </ScrollView>

  );
}