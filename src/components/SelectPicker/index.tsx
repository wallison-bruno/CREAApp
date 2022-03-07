import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';


import { styles } from './styles';

type Props = PickerProps &{
  title: string;
  categorias: any;
}

export function SelectPicker({title, categorias} : Props) {

  const [escolaridade, setEscolaridade] = useState('');

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.viewPicker}>
        <Picker
        style={styles.pickerComponent}
        selectedValue={escolaridade}
        onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)
       
        }> 
        {
          categorias.map(category => (
            <Picker.Item 
              key={category.id}
              label={category.title}
              value={category.label}
            />
          ))
        }            
      </Picker>
      </View>
    </View>
  );
}