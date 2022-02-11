import React from "react";
import { View } from 'react-native';
import { ButtonEnter } from "../../components/ButtonEnter";
import { HeaderBar } from "../../components/HeaderBar";
import { theme } from "../../global/theme";
import { styles } from "./styles";

export function Consultas(){
    return(
        <View style={styles.container}> 
                    
                <HeaderBar title="Consultas" />
            
            <View style={styles.navigation}>            
                <ButtonEnter 
                    style={styles.buttonOne} 
                    color= {theme.colors.darkgray} 
                    title="Por Profissional/Empresa"
                    fontSize={14}
                    fontFamily={theme.fonts.SemiBold600}
                />
                <ButtonEnter 
                    style={styles.buttonOne} 
                    color= {theme.colors.darkgray} 
                    title="ART por chave"
                    fontSize={14}
                    fontFamily={theme.fonts.SemiBold600}
                />
                <ButtonEnter 
                    style={styles.buttonOne} 
                    color= {theme.colors.darkgray} 
                    title="Protocolo"
                    fontSize={14}
                    fontFamily={theme.fonts.SemiBold600}
                />
                <ButtonEnter 
                    style={styles.buttonOne} 
                    color= {theme.colors.darkgray} 
                    title="De Certidão"
                    fontSize={14}
                    fontFamily={theme.fonts.SemiBold600}
                />
                <ButtonEnter 
                    style={styles.buttonOne} 
                    color= {theme.colors.darkgray} 
                    title="Denúncia"
                    fontSize={14}
                    fontFamily={theme.fonts.SemiBold600}
                />
            </View>

        </View>
    );
}