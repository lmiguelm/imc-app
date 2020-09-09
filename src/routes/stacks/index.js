import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext from '../../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signed } = useContext(AuthContext);
    return(
        <NavigationContainer>
            {signed ? (
                <AppRoutes/>
            ) : (
                <AuthRoutes/>
            )}
        </NavigationContainer>
    );
}

export default Routes;