import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { Input } from '../../Input';

import { styles } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export function InputForm({control, name, ...rest} : Props){
  return (
    <View style={styles.container}>
        <Controller
             control={control}
             render={({ field: { onChange, value}}) => (
                <Input 
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
                )}   
                name={name}
        />    
    </View>
  );
}