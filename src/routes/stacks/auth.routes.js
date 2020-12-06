import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

import Login from '../../pages/Login'
import ForgotPassword from '../../pages/ForgotPassword';
import Register from '../../pages/Register';
import Feedback from '../../pages/Feedback';
import Onboard from '../../pages/Oboarding';

import { useImc } from '../../contexts/imc';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {

	const { showOnboarding } = useImc();

	return (
		<Navigator screenOptions={{ headerShown: false }} >
			{showOnboarding && (
				<Screen name="Onboard" component={Onboard} />
			)}
			<Screen name="Login" component={Login} />
			<Screen name="ForgotPassword" component={ForgotPassword} />
			<Screen name="Register" component={Register} />
			<Screen name="Feedback" component={Feedback} />
		</Navigator>
	);
}


export default AuthRoutes;





