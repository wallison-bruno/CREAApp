import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { theme } from '../../global/theme';
import { styles } from './styles';


type Props = {
    title1: string;
    title2: string;
} 


export function Radio({title1, title2} : Props){
    const [checked, setChecked] = React.useState('first');
    
    return(
        <View style={styles.container}>

            <View style={styles.selection}>
            <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                uncheckedColor={checked === 'first' ?  theme.colors.radiored : theme.colors.highgray}
                color={theme.colors.radiored}
            />
            <Text style={styles.title1}>
                {title1}
            </Text>
            <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                uncheckedColor={checked === 'second' ?  theme.colors.radiored : theme.colors.highgray}
                color={theme.colors.radiored}
            />
            <Text style={styles.title2}>
                {title2}
            </Text>               
            </View>
            {/* <Text>Is CheckBox selected: {check1 ? "👍" : "👎"} </Text> */}
        </View>      
    )
}