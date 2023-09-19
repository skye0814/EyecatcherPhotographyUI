import axios from 'axios';
import { API_BASE_URL } from './api';
import { User } from '../models/User';

const API_URL = API_BASE_URL;

const registerAsync = async (user: User) => {
    try {
        const response = await axios.post(`${API_URL}/api/user/register`, user);
        return response.data;
    }
    catch (error) {
        return error;
    }
};

const loginAsync = async (user: User) => {
    try {
        const response = await axios.post(`${API_URL}/api/user/login`, user);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }
    catch (error) {
        return error;
    }
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  return localStorage.getItem('token');
};

export default {
  registerAsync,
  loginAsync,
  logout,
  getCurrentUser
};