import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { styles } from './styles';

export function AreaRestrita(){
  return (
    <View style={styles.container}>
        <StatusBar
            barStyle='light-content'
            backgroundColor='black' 
            translucent
          />
    </View>
  );
}