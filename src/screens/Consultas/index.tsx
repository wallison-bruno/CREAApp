import React from "react";
import { View, Text, StatusBar} from 'react-native';
import { ButtonText } from "../../components/ButtonText";
import { HeaderBar } from "../../components/HeaderBar";
import { styles } from "./styles";

export function Consultas(){
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor= 'black'
            />
            
            <View>
                <HeaderBar text="Consultas" />
            </View>

            <View style={styles.navigation}>            
                <ButtonText title="Por Profissional/Empresa"/>
                <ButtonText title="ART por chave"/>
                <ButtonText title="Protocolo"/>
                <ButtonText title="De Certidão"/>
                <ButtonText title="Denúncia"/>
            </View>

        </View>
    );
}