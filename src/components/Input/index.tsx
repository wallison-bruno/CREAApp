import React from 'react';
import { TextInput, TextInputProps, View} from 'react-native';
import { theme } from '../../global/theme';

import { styles } from './styles';

type Props = TextInputProps;

export function Input({...rest} : Props){
  return (
            <TextInput 
                style={styles.input}
                {...rest}
            />
  );
}