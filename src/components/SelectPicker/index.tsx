import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';


import { styles } from './styles';

type Props = PickerProps &{
  title: string;
}

export function SelectPicker({title} : Props) {

  const [escolaridade, setEscolaridade] = useState('');

  return (
    <View>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.viewPicker}>
        <Picker
        style={styles.pickerComponent}
        selectedValue={escolaridade}
        onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)
       
        }>       
          <Picker.Item label='Local' value='Local' />
          <Picker.Item label='Residencial' value='Residencial' />
          <Picker.Item label='Online' value='Online' />       
      </Picker>
      </View>
    </View>
  );
}