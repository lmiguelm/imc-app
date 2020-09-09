import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import * as auth from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [signed, setSigned] = useState(false);

    useEffect(() =>{ 
        async function loadStorageData() {
            const storageUser =  await AsyncStorage.getItem('@ImcAuth:user');
            const storageToken = await AsyncStorage.getItem('@ImcAuth:token');

            if(storageToken && storageUser) {
                setUser(JSON.parse(storageUser));
                setSigned(true);
            }
        }
        loadStorageData();
    }, []);
    
    async function signIn(email, password, rememberMe) {
        const res = await auth.login(email, password);
        const {user, token} = res;

        setUser(user);
        setSigned(true);

        if(rememberMe) {
            await AsyncStorage.setItem('@ImcAuth:user', JSON.stringify(user));
            await AsyncStorage.setItem('@ImcAuth:token', token);
        }
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUser({});
        setSigned(false);
    }

    return(
        // !!user == Boolean(user);
        <AuthContext.Provider value={{ signed, user, signIn, signOut }}>  
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;