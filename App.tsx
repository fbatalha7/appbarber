import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './android/app/src/stacks/MainStack';
import UserContext from './android/app/src/contexts/UserContext';

export default () => (
  <UserContext>
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  </UserContext>
)