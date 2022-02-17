import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { AcessoPublico } from '../screens/AcessoPublico';
import { Consultas } from '../screens/Consultas';
import { Denuncia } from '../screens/Denuncia';
import { AreaRestrita } from '../screens/AreaRestrita';

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
                    name='AreaRestrita'
                    component={AreaRestrita}
                />
                <Screen 
                    name='Consultas'
                    component={Consultas}
                />   
                <Screen 
                    name='AcessoPublico'
                    component={AcessoPublico}
                />
                <Screen 
                    name='Denuncia'
                    component={Denuncia}
                />
                <Screen 
                    name='Login'
                    component={Login}
                />
        </Navigator>
  );
}