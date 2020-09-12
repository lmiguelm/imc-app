import React, { createContext, useContext, useEffect, useState } from 'react';

import api from '../services/api';
import { useAuth } from './auth';

const ImcContext = createContext({ });

export const ImcProvider = ({ children }) => {

    const { user: { id } } = useAuth();

    const [imcs, setImcs] = useState([]);
    
    async function loadImcs() {
        const res = await api.get(`/imcs/${id}`);
        setImcs(res.data);
    };

    function deleteImc(id) {
        return new Promise( async (resolve, reject) => {
            try {
                await api.delete(`/imcs/${id}`);
                const imcsAtt = imcs.filter(imc => imc.id !== id);
                setImcs(imcsAtt);
                resolve();
            } catch (e) {
                reject(e.response.data.message);
            }
        });
    };

    function createImc(imc) {
        return new Promise( async (resolve, reject) => {
            imc.user_id = id;
            try {
                await api.post('/imcs/new', {
                    imc
                });
                resolve();
            } catch(e) {
                reject(e.response.data.message);
            }
        });
    }

    function filter(date, imc) {
        console.log('ok');
    }

    return(
        <ImcContext.Provider value={{ deleteImc, loadImcs, createImc, imcs }}>
            {children}
        </ImcContext.Provider>
    );

};

export function useImc() {
    const context = useContext(ImcContext);
    return context;
}