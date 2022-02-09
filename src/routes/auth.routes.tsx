import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Consultas } from '../screens/Consultas';
import { shadow } from 'react-native-paper';

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
                name='Consultas'
                component={Consultas}
            />
            <Screen 
                name='Login'
                component={Login}
            />
        </Navigator>
  );
}