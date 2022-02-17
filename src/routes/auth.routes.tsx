import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { AcessoPublico } from '../screens/AcessoPublico';
import { Consultas } from '../screens/Consultas';
import { Denuncia } from '../screens/Denuncia';
import { AreaRestrita } from '../screens/AreaRestrita';
import { ForYou } from '../screens/ForYou';

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
                    name='ForYou'
                    component={ForYou}
                />
                <Screen 
                    name='AreaRestrita'
                    component={AreaRestrita}
                />
                <Screen 
                    name='Denuncia'
                    component={Denuncia}
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