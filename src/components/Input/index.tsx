import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { theme } from '../../global/theme';

import { styles } from './styles';

type Props = TextInputProps & {
    title: string;
}

export function Input({title, ...rest} : Props){
  return (
    
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={title}
                placeholderTextColor={theme.colors.labelgray}
                {...rest}
            />

        </View>
    
  );
}