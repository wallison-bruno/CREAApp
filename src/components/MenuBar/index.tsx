import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import MenuHome from '../../assets/menuhome.png'
import MenuProfile from '../../assets/menuprofile.png'
import MenuService from '../../assets/menuservices.png'
import MenuServices from '../../assets/menuservice.png'

export function MenuBar(){
  return (
    <View style={styles.container}>
        <View style={styles.content}>

            <RectButton>
                <Image source={MenuHome} />
            </RectButton>

            <RectButton>
                <Image source={MenuService} />
            </RectButton>

            <RectButton>
                <Image source={MenuServices} />
            </RectButton>

            <RectButton>
                <Image source={MenuProfile} />
            </RectButton>

        </View>
        
    </View>
  );
}