import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';

import * as auth from '../services/auth';

import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [signed, setSigned] = useState(false);

    useEffect(() =>{ 
        async function loadStorageData() {
            const storage = await AsyncStorage.multiGet(['@ImcAuth:user', '@ImcAuth:token']);
            const storageUser = storage[0][1];
            const storageToken = storage[1][1];

            if(storageToken && storageUser) {
                setUser(JSON.parse(storageUser));
                setSigned(true);
            }
            api.defaults.headers.Authorization = storageToken;
        }
        loadStorageData();
    }, []);
    
    async function signIn(email, password, rememberMe) {
        const res = await auth.login(email, password);
        const {user, token} = res;

        setUser(user);
        setSigned(true);

        api.defaults.headers.Authorization = token;

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

    function editUser(newData) {
        return new Promise( async (resolve, reject) => {
            try {
                await api.put(`/users/${user.id}`, { user: newData });
                await AsyncStorage.setItem('@ImcAuth:user', JSON.stringify(newData));
                setUser(newData);
                resolve();
            } catch (e) {
                reject(e.response.data.message);
            }
        });
    }

    function changePassword(oldPassword, newPassword) {
        return new Promise( async (resolve, reject) => {
            try {
                await api.post(`/auth/${user.id}/changePassword`,{
                    oldPassword,
                    newPassword
                });
                resolve();
            } catch (e) {
                reject(e.response.data.message);
            }
        });
    }

    return(
        // !!user == Boolean(user);
        <AuthContext.Provider value={{ editUser, changePassword, signed, user, signIn, signOut }}>  
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
