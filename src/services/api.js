import axios from 'axios';

const api = axios.create({
    // DEV
    baseURL: 'http://192.168.15.171:3333'
    // PROD
    // baseURL: 'http://imc-server.herokuapp.com/'
});

export default api;