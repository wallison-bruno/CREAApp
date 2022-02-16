import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import Bell from '../../assets/bell.png';

type Props ={ 
    image: any;
    name: string;
    idCrea: number;
}

export function Avatar({image, name, idCrea, ...rest}: Props){
  return (
    <View style={styles.container} {...rest}>
        <View style={styles.content}>
        
        <View style={styles.viewImage}>
            <Image source={image} style={[styles.image]}/>
        </View>
               
        <View style={styles.viewText}>
            <Text style={styles.name}>Olá, {name} </Text>
            <Text style={styles.idCrea}>CREA-CE nº {idCrea} </Text>
        </View>

        <RectButton style={styles.viewIcon}>
            <Image source={Bell} style={styles.icon}/>
        </RectButton>

       </View> 
    </View>
  );
}