import axios from 'axios';

export const IBGEApi = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });