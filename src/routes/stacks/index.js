import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Loading from '../../components/Loading';

import {useAuth} from '../../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signed, loading } = useAuth();
    
    if(loading) {
        return <Loading/>
    } else {
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
}

export default Routes;