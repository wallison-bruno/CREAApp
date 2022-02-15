import React from 'react';
import {Text, View, TouchableOpacity, Dimensions, ScrollView  } from 'react-native';
import { styles } from '../PickerModal/styles';

import { OPTIONS } from '../../utils/categories';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export function PickerModal(props: any){
    const onPressItem = (option: any) => {
        props.changeModalVisibility(false)
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>        
            </TouchableOpacity>
        )
    })

  return (
    <TouchableOpacity
        onPress={( ) => props.changeModalVisibility(false)}
        style={styles.container}
    >
     <View style={[
         styles.modal, { width: WIDTH - 30, height: HEIGHT/2 }, 
         {backgroundColor: 'transparent'}
         ]}>
        <ScrollView>
            {option}
        </ScrollView>
     </View>        
    </TouchableOpacity>
  );
}
