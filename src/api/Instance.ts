import axios from 'axios';

const Instance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
  },
});

export default Instance;
