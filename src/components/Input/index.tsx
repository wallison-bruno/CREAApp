import React from 'react';
import { TextInput, TextInputProps, View, ScrollView } from 'react-native';
import { theme } from '../../global/theme';

import { styles } from './styles';

type Props = TextInputProps & {
    title: string;
}

export function Input({title, ...rest} : Props){
  return (
    
        <ScrollView style={styles.container} keyboardDismissMode='interactive'>
            <TextInput 
                style={styles.input}
                placeholder={title}
                placeholderTextColor={theme.colors.highgray}
                selectionColor={theme.colors.highlight}
                {...rest}
            />

        </ScrollView>
    
  );
}