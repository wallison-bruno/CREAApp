import React, {useState} from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import { InputTextIcon } from '../../components/InputTextIcon';
import { InputText } from '../../components/InputText';
import { Avatar } from '../../components/Avatar';

import { styles } from './styles';
import AvatarPng from '../../assets/avatar.png'
import EyePasswordPng from '../../assets/eyepassword.png';
import { color } from 'react-native-elements/dist/helpers';
import { theme } from '../../global/theme';
import { MenuBar } from '../../components/MenuBar';


export function AreaRestritaPerfil(){

  let [estado, setEstado] = useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 
        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
        />
      <View style={styles.content}>
        
        <Avatar 
           image={AvatarPng}
           name={'Fulano'}
           idCrea={'456978985'}
        />    

        <View style={styles.field}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>
                    Dados Pessoais
                </Text>
            </View>

            <InputText
                title='Nome:'
                textAlign='left'
              />
              <InputText
                title='Sobrenome:'
                textAlign='left'
              />
        </View>

        <View style={styles.field}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>
                Endereço
                </Text>
            </View>
            {/* Aqui tem que colocar um link dentro do input */}
            <InputText
                title='CEP:'
                textAlign='left'
              />
              <InputText
                title='Logradouro:'
                textAlign='left'
              />
              
              <View style={styles.contentInputTop}>
                      
                      <View>
                          <Text style={styles.textInput}>
                            Número:
                          </Text>
                          <TextInput 
                            style={styles.input}
                          />
                      </View>

                      <View>
                          <Text style={styles.textInput}>
                          Complemento:
                          </Text>
                          <TextInput 
                            style={styles.input}
                          />   
                      </View> 
                      
              </View>
              
                  <View style={styles.contentInputBottom}> 

                  <View>
                        <Text style={styles.textInput}>
                          UF:
                        </Text>
                        <View style={styles.picker}>

                        <Picker style={{width: 149, height: 48}}
                          selectedValue={estado}
                          onValueChange={(item, indexItem)=>{setEstado(item)}}
                        >                        
                          <Picker.Item key={0} value='CE' label='CE'/>
                          <Picker.Item key={1} value='PE' label='PE'/>
                        </Picker>    

                        </View>
                  </View>
                  <View>
                        <Text style={styles.textInput}>
                          Cidade:
                        </Text>
                        <TextInput 
                          style={styles.input}
                        />
                  </View>    
                      
                  </View>

                  <InputText
                    title='Logradouro:'
                    textAlign='left'
                  /> 

        </View>
                <View style={styles.field}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>
                            Contato
                        </Text>
                    </View>

                    <InputText
                        title='E-mail:'
                        textAlign='left'
                      />
                      <InputText
                        title='Telefone:'
                        textAlign='left'
                      />
                </View>

                <View style={styles.field}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>
                        Senha
                        </Text>
                    </View>

                    <InputTextIcon
                        title='Senha atual:'
                        name='Digite a senha'
                        iconLeft={null}
                        iconRight={EyePasswordPng}
                      />
                      <InputTextIcon
                        title='Telefone:'
                        name='Repita a senha'
                        iconLeft={null}
                        iconRight={EyePasswordPng}
                      />
                </View>
                
                <View style={styles.contentButton}>
                      <View style={styles.contentButtonLeft}>
                      <RectButton 
                          style={{width: 168, height: 56, alignItems: 'center', justifyContent: 'center'}}
                      >  
                          <Text style={{color: '#797E92', fontSize: 16, fontFamily: theme.fonts.Medium500}}>Cancelar</Text>
                      </RectButton>
                      </View>


                      <View style={styles.contentButtonRight}>
                      <RectButton 
                          style={{width: 168, height: 56, alignItems: 'center', justifyContent: 'center'}}
                      >  
                          <Text style={{color: '#ffffff', fontSize: 16, fontFamily: theme.fonts.Bold700}}>Salvar</Text>
                      </RectButton>
                      </View>
                </View>

                <MenuBar />
      </View>
    </ScrollView>
  );
}