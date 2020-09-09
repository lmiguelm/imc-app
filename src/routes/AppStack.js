import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing';
import Historic from '../pages/Historic';
import ImcTabs from './ImcTabs';
import Feedback from '../pages/Feedback';
import Onboard from '../pages/Oboarding';
import ChangePassword from '../pages/ChangePassword';

const { Navigator, Screen  } = createStackNavigator();

export default function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name="Onboard" component={ Onboard } />
                <Screen name="Login" component={ Login } />

                <Screen name="ForgotPassword" component={ ForgotPassword } />
                <Screen name="Register" component={ Register } />

                <Screen name="Landing" component={ Landing } />
                <Screen name="Profile" component={ Profile }  />    
                <Screen name="ChangePassword" component={ ChangePassword }  />
                <Screen name="Historic" component={ Historic } />
                <Screen name="Imc" component={ ImcTabs } />
                
                <Screen name="Feedback" component={ Feedback } />
            </Navigator>
        </NavigationContainer>
    );
}