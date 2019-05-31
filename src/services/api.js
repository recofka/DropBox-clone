import axios from 'axios';

const api = axios.create({
  baseURL: 'https://drop-b-api.herokuapp.com',
});
export default api;
