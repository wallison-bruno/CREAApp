import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { AcessoPublico } from '../screens/AcessoPublico';
import { Consultas } from '../screens/Consultas';
import { Denuncia } from '../screens/Denuncia';
import { AreaRestrita } from '../screens/AreaRestrita';
import { ForYou } from '../screens/ForYou';
import { AreaRestritaPerfil } from '../screens/AreaRestritaPerfil';
import { Financeiro } from '../screens/Financeiro';
import { Anuidade } from '../screens/Anuidade';
import { ServicosOnline } from '../screens/ServicosOnline';
import { CQRs } from '../screens/CQRs';
import { SeusProtocolos } from '../screens/SeusProtocolos';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return (
        <Navigator
            screenOptions={{
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerShown: false
            }}>
                <Screen 
                    name='SeusProtocolos'
                    component={SeusProtocolos}
                />
                <Screen 
                    name='Denuncia'
                    component={Denuncia}
                />
                <Screen 
                    name='CQRs'
                    component={CQRs}
                />
                <Screen 
                    name='Anuidade'
                    component={Anuidade}
                />
                <Screen 
                    name='ServicosOnline'
                    component={ServicosOnline}
                />
                <Screen 
                    name='Financeiro'
                    component={Financeiro}
                />
                <Screen 
                    name='AreaRestritaPerfil'
                    component={AreaRestritaPerfil}
                />
                <Screen 
                    name='ForYou'
                    component={ForYou}
                />
                <Screen 
                    name='AreaRestrita'
                    component={AreaRestrita}
                />
                <Screen 
                    name='Login'
                    component={Login}
                />
                <Screen 
                    name='AcessoPublico'
                    component={AcessoPublico}
                />
                <Screen 
                    name='Consultas'
                    component={Consultas}
                />
        </Navigator>
  );
}