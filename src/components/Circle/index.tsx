import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  isMarket: boolean;
}

export function Circle({isMarket} : Props){
  return (
    <View style={isMarket ? styles.containerBlack : styles.container}>
        {/* aqui tem um circulo */}
    </View>
  );
}