import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://usuarios.ronierlima.dev',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });