import api from './api';

export function login(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await api.post('/auth/login', {
                email,
                password 
            });

            const token = res.headers.authorization;
            const user = res.data;

            resolve({
                token,
                user
            });
               
        } catch(e) {            
            reject(e.response.data.message);
        } 
    });
}