import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';
import { Login } from '../screens/Login';


import { AuthRoutes } from './auth.routes'; 

export function Routes(){
  const {token} = useAuth();
  console.log(token)

  return (  
    <NavigationContainer>
      {
        token === ('' || undefined) ? <Login /> : <AuthRoutes /> 
      }
    </NavigationContainer>
  );
}