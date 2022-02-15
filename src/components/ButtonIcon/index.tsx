import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    color: string;
    fontSize: number;
    fontFamily: string;
    iconLeft: any;
    iconRight: any;
}

export function ButtonIcon({
        title, 
        color, 
        fontSize, 
        fontFamily, 
        iconLeft, 
        iconRight, 
        ...rest
    }: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >         
            <View style={styles.content}>

              <View style={styles.viewIconOne}>
                <Image style={[styles.iconOne]} source={iconLeft}/>
              </View>

                  <View style={styles.viewTitle}>
                    <Text style={[
                        styles.title, 
                        {color: color}, 
                        {fontSize: fontSize},
                        {fontFamily: fontFamily}
                      ]}>{title}</Text>
                  </View>

                <View style={styles.ViewIconTwo}>
                  <Image style={[styles.iconTwo]} source={iconRight} />
                </View>

            </View>
    </RectButton>
  );
}