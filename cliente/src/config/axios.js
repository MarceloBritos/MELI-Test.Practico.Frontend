import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://cryptic-lake-53584.herokuapp.com',
});

export default clienteAxios;
