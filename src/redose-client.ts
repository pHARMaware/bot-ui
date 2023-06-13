import axios from 'axios';

const redoseClient = axios.create({
  baseURL: '/api',
});

export default redoseClient;
