import React, { createContext, useContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

import api from '../services/api';
import { useAuth } from './auth';

const ImcContext = createContext({});

export const ImcProvider = ({ children }) => {

	const { user: { id } } = useAuth();

	const [imcs, setImcs] = useState([]);
	const [showOnboarding, setShowOnboarding] = useState(true);

	useEffect(() => {
		async function checkFirst() {
			const res = await AsyncStorage.getItem('@ImcOnboarding');
			if (res == 'false') {
				setShowOnboarding(false);
			} else {
				setShowOnboarding(true);
			}
		}
		checkFirst();
	}, []);

	async function loadImcs() {
		try {
			const res = await api.get(`/imcs/${id}`);
			setImcs(res.data);
		} catch (e) {
			setImcs([]);
		}
	};

	function deleteImc(id) {
		return new Promise(async (resolve, reject) => {
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
		return new Promise(async (resolve, reject) => {
			imc.user_id = id;
			try {
				await api.post('/imcs/new', {
					imc
				});
				resolve();
			} catch (e) {
				reject(e.response.data.message);
			}
		});
	}

	async function filter(date, imc) {
		try {
			const res = await api.get(`/imcs/${id}/filter?date=${date}&imc=${imc}`);
			setImcs(res.data);
		} catch (e) {
			console.log(e);
		}
	}

	async function changeShowOnboarding() {
		await AsyncStorage.setItem('@ImcOnboarding', 'false');
	}

	return (
		<ImcContext.Provider value={{ filter, deleteImc, loadImcs, createImc, imcs, showOnboarding, changeShowOnboarding }}>
			{children}
		</ImcContext.Provider>
	);

};

export function useImc() {
	const context = useContext(ImcContext);
	return context;
}