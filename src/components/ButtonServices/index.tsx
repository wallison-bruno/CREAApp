import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import ForYou from '../../assets/foryou.png';
import Online from '../../assets/online.png';
import YellowArrow from '../../assets/yellowarrow.png'
import BlueArrow from '../../assets/bluearrow.png'

export function ButtonServices(){
  return (
    <View style={styles.container}>

        <Text style={styles.titleServices}>
            Nossas Soluções
          </Text>

          <View style={styles.content}>

              <RectButton style={styles.left}>
                  <Image source={ForYou} style={[styles.imageLeft, {width: 168, height: 104}]}/>
                  <Text style={styles.titleLeft}>
                    Soluções {'\n'}
                    Para Você
                  </Text>
                  <Image source={YellowArrow} style={styles.arrowleft}/>
              </RectButton>
               
              <RectButton style={styles.right}>
                
                  <Image source={Online} style={[styles.imageRight, {width: 168, height: 104}]} />                  
                  <Text style={styles.titleRight}>Serviços {'\n'}Online</Text>
                  <Image source={BlueArrow} style={styles.arrowright}/>
                
              </RectButton>
            
          </View>
    </View>
  );
}