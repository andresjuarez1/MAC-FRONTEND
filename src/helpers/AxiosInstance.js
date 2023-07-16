import axios from 'axios';

export const axiosInstancia = axios.create({
  baseURL: 'http://18.208.99.204:3306/',
  headers: {
    'Content-type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  },
});