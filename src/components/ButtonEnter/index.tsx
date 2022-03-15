import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    colors: string;
    isLoading: boolean;
}

export function ButtonEnter({title, colors, isLoading, ...rest}: Props){
  return (
    <TouchableOpacity
        style={styles.container}
        {...rest} 
    >  
        <Text style={[styles.title, {color: colors}]}>{title}</Text>
    </TouchableOpacity>
  );
}