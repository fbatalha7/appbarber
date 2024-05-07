import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';

import Preload from '../Screens/Preload';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

const stack = createStackNavigator();

export default () => (
    <stack.Navigator>
        <stack.Screen name='app' component={Preload} />
        <stack.Screen
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }}
        />
           <stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />
    </stack.Navigator>
);
