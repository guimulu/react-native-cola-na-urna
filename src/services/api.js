import axios from 'axios';

const api = axios.create({
  baseURL: 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/eleicao',
});

export default api;
