import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../pages/Profile';
import Landing from '../../pages/Landing';
import Historic from '../../pages/Historic';
import ImcTabs from './../tabs/ImcTabs';
import ChangePassword from '../../pages/ChangePassword';
import Feedback from '../../pages/Feedback';
import DeleteAccount from '../../pages/DeleteAccount';

const { Navigator, Screen  } = createStackNavigator();

const AppRoutes = () => (
    <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Landing" component={ Landing } />
        <Screen name="Profile" component={ Profile }  />    
        <Screen name="DeleteAccount" component={ DeleteAccount }  />    
        <Screen name="ChangePassword" component={ ChangePassword }  />
        <Screen name="Historic" component={ Historic } />
        <Screen name="Imc" component={ ImcTabs } />
        <Screen name="Feedback" component={ Feedback } />
    </Navigator>
);

export default AppRoutes;