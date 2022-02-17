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
    borderBottomWidth: number;
    paddingLeft: number;
    marginRight: number;
    marginLeft: number;
    marginLeftTitle: number;
}

export function ButtonIcon({
        title, 
        color, 
        fontSize, 
        fontFamily, 
        iconLeft, 
        iconRight,
        borderBottomWidth,
        paddingLeft,
        marginRight,
        marginLeft,
        marginLeftTitle,
        ...rest
    }: Props){
  return (
    <RectButton 
        style={styles.container}
        {...rest} 
    >         
            <View style={[styles.content, {borderBottomWidth: borderBottomWidth, borderBottomColor: '#DCDDE0'}]}>
                
              <View style={styles.viewIconOne}>
                <Image style={[styles.iconLeft, {marginRight: marginRight }]} source={iconLeft}/>
              </View>

                  <View style={[styles.viewTitle, {marginLeft: marginLeftTitle}]}>
                    <Text style={[
                        styles.title,
                        {paddingLeft: paddingLeft}, 
                        {color: color}, 
                        {fontSize: fontSize},
                        {fontFamily: fontFamily}
                      ]}>{title}</Text>
                  </View>

                <View style={styles.ViewIconTwo}>
                  <Image style={[styles.iconRight, {marginLeft: marginLeft}]} source={iconRight}/>
                </View>

            </View>
    </RectButton>
  );
}