import React from 'react';
import { View, Text, Image} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';



type Props = RectButtonProps & {
    title: string;
    image: string;
}

export function NewsTitle({title, image, ...rest}: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >        
      <Image style={styles.img} source={{uri: image}}/>
      
      <View style={styles.titleBackground}>
        <Text style={styles.title}>{title}</Text>   
      </View>
                    
    </RectButton>
  );
}