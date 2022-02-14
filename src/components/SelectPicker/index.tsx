import React, {useState} from 'react';
import { View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { styles } from './styles';

export function SelectPicker(){

  const [escolaridade, setEscolaridade] = useState('');

  return (
    <View>
        <Picker 
          style={styles.pickerComponent}
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)
          }>
          <Picker.Item label='Postal' value=''/>
          <Picker.Item label='Online' value='Online'/> 
          <Picker.Item label='Outros' value='Outros'/>     
        </Picker>
        <Text style={{fontSize: 25}}>
          {escolaridade}
        </Text>
    </View>
  );
}