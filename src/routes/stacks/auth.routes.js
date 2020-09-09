import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/Login'
import ForgotPassword from '../../pages/ForgotPassword';
import Register from '../../pages/Register';
import Feedback from '../../pages/Feedback';
import Onboard from '../../pages/Oboarding';

const { Navigator, Screen  } = createStackNavigator();

const AuthRoutes = () => (
    <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Onboard" component={ Onboard } />
        <Screen name="Login" component={ Login } />
        <Screen name="ForgotPassword" component={ ForgotPassword } />
        <Screen name="Register" component={ Register } />
        <Screen name="Feedback" component={ Feedback } />
    </Navigator>
);

export default AuthRoutes;
   
      
        
       
    
