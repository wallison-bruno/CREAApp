import React from 'react';

import { TextInput, TextInputProps, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = TextInputProps & {
  title: string;
  name: string;
  iconLeft: any;
  iconRight: any;
}

export function InputTextIcon({title, name, iconLeft, iconRight, ...rest} : Props){
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>
              {title}
        </Text>
        <View style={styles.viewInput}>
          <RectButton style={styles.buttonLeft}>
              <Image source={iconLeft}/>
          </RectButton>
              <TextInput 
                        style={styles.input}
                        placeholder={name}
                        {...rest} 
              />
          <RectButton style={styles.buttonRight}>
              <Image source={iconRight}/>
          </RectButton>
        </View>
        
    </View>    
  );
}