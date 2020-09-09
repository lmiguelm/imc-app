import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../pages/Profile';
import Landing from '../../pages/Landing';
import Historic from '../../pages/Historic';
import ImcTabs from './../ImcTabs';
import ChangePassword from '../../pages/ChangePassword';

const { Navigator, Screen  } = createStackNavigator();

const AppRoutes = () => (
    <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Landing" component={ Landing } />
        <Screen name="Profile" component={ Profile }  />    
        <Screen name="ChangePassword" component={ ChangePassword }  />
        <Screen name="Historic" component={ Historic } />
        <Screen name="Imc" component={ ImcTabs } />
    </Navigator>
);

export default AppRoutes;