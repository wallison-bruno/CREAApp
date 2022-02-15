import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { PickerModal } from '../PickerModal';

import { styles } from './styles';
import ArrowDown from '../../assets/downarrow.png'

type Props = {
    title: string;
}

export function Picker({title, ...rest} : Props){
  const [chooseData, setchooseData] = useState('Select Item...');
  const [isModalVisible, setisModalVisible] = useState(false); 
  
  const changeModalVisibility = (bool: any) => {
      setisModalVisible(bool)
  }

  const setData = (option: any) => {
      setchooseData(option)
  }

  return (
    <View {...rest}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
            onPress={() => changeModalVisibility(true)} 
            style={styles.touchableOpacity}
        >
            <Text style={styles.textOption}>
                    {chooseData}
            </Text>
            <Image source={ArrowDown}/>
        </TouchableOpacity>
        <Modal
           transparent={true}
           animationType='fade'
           visible={isModalVisible}
           onRequestClose={() => changeModalVisibility(false)}
        >
         <PickerModal
            changeModalVisibility={changeModalVisibility}
            setData={setData}
         />
        </Modal>
    </View>
  );
}