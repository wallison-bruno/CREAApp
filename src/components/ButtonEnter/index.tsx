import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    color: string;
    fontSize: number;
    fontFamily: string;
}

export function ButtonEnter({title, color, fontSize, fontFamily, ...rest}: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >  
            <Text style={[
                // styles.title, 
                {color: color}, 
                {fontSize: fontSize},
                {fontFamily: fontFamily}
            ]}>{title}</Text>
    </RectButton>
  );
}