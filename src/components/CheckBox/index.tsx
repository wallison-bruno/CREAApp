import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { theme } from '../../global/theme';


export function Check(){
    const [ check1, setCheck1 ] = useState(false);
    return(
        <View style={styles.container}>

            <View style={styles.selection}>
                <Checkbox 
                    style={styles.checkbox}
                    value={check1}
                    onValueChange={setCheck1}
                    color={check1 ? theme.colors.highgray : undefined}             
                />
                <Text style={styles.label}>Lembrar senha</Text> 
            </View>
            {/* <Text>Is CheckBox selected: {check1 ? "👍" : "👎"} </Text> */}
        </View>      
    )
}