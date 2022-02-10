import React from 'react';
import { View, Text, Image} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';



type Props = RectButtonProps & {
    title: string;
}

export function NewsTitle({title, ...rest}: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >        
        {/* Faltando a imagem   */}
        
      <Image style={styles.img} source={require("../../assets/news.png")}/>
      
      <View style={styles.titleBackground}>
        <Text style={styles.title}>{title}</Text>   
      </View>


       
        
                    
    </RectButton>
  );
}