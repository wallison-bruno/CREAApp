import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import { theme } from '../../global/theme';

import { styles } from './styles';

type Props = RectButtonProps & {
  text: string;
}

export function HeaderBar({text, ...rest} : Props){
    const { primary, secondary30 } = theme.colors;

  return (
    <LinearGradient 
    start={{x: 0 , y: 0}}
    end={{x: 1, y: 0}}
    locations={[0 , 0.9]}
    style={styles.container} 
    colors={[primary, secondary30]}
    >
        {/* Esse é o botão com Icon */}
        <RectButton style={styles.iconWrapper} {...rest} >
            <Ionicons 
              style={styles.icon}
              name='ios-arrow-back'
              color={theme.colors.milk}
              size={25}
            />
        </RectButton>

            <Text style={styles.title}> {text} </Text>  

    </LinearGradient>
  );
}