import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    titleLeft: string;
    titleRight: string;
}

export function ButtonGuides({ titleLeft, titleRight, ...rest}: Props){
  return (

    //FALTANDO O O CHECKED TRUE E FALSE DE CORES DO BOTÃO
    <View style={styles.container} >
        <RectButton style={styles.left} {...rest}>
            <Text style={styles.titleLeft}>
                { titleLeft }
            </Text>
           
        </RectButton>
        <RectButton style={styles.right} {...rest}>
            <Text style={styles.titleRight}>
                { titleRight }
            </Text>
        </RectButton>
    </View>   
  );
}