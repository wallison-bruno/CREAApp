import React from 'react';
import { 
  View, 
  Image, 
  ScrollView, 
  Text, 
  StatusBar
} from 'react-native';


import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/auth';

import { Check } from '../../components/CheckBox';
import { ButtonEnter } from '../../components/ButtonEnter';
import { InputForm } from '../../components/Form/InputForm';

import { theme } from '../../global/theme';
import { styles } from './styles';

import Logo from '../../assets/logo.png'
import Public from '../../assets/public.png'


export function Login(){

  const {control, handleSubmit} = useForm();
  const { isLoadingSingNin, signIn, signOut } = useAuth();
    
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <StatusBar
          translucent={false}
          barStyle={'dark-content'}
          backgroundColor="transparent"
        />

          <View style={styles.logo}>
              <Image 
                  source={Logo}
              />
          </View>
          
          <View style={styles.content} >
              <InputForm 
                name='email'
                control={control}
                placeholder='E-mail'
                placeholderTextColor={theme.colors.highgray}
              />
              <InputForm 
                name='password'
                control={control}
                placeholder='Password'
                placeholderTextColor={theme.colors.highgray}
              />

              <Check />
          </View> 

          <View style={styles.recoverPassword}>
            <Text style={styles.titleRecover}>Esqueceu a senha?</Text>

            {/* Aqui é um link */}
            <Text style={styles.linkRecover}>Clique Aqui</Text>
          </View>

          <View style={styles.enter}>

            <ButtonEnter 
              style={styles.buttonEnter} 
              title='Entrar'
              colors={theme.colors.milk}
              isLoading={!isLoadingSingNin}
              onPress={handleSubmit(signOut)}
   
            />

          </View>
          
          {/* Aqui é um link */}
          <View style={styles.public}>
              <Image source={Public} style={styles.imagePublic}/>
              <Text style={styles.titlePublic}>Ambiente público</Text>
          </View>
        
    </ScrollView>
  );
}