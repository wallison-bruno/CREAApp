import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    color: string;
    fontSize: number;
    fontFamily: string;
    iconOne: any;
    iconTwo: any;
}

export function ButtonIcon({
        title, 
        color, 
        fontSize, 
        fontFamily, 
        iconOne, 
        iconTwo, 
        ...rest
    }: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >         
            <View style={styles.viewIcon}>
              <Image style={[styles.iconOne]} source={iconOne}/>
                <Text style={[
                  // styles.title, 
                  {color: color}, 
                  {fontSize: fontSize},
                  {fontFamily: fontFamily}
                ]}>{title}</Text>
                <Image style={styles.iconTwo} source={iconTwo}/>
            </View>
    </RectButton>
  );
}