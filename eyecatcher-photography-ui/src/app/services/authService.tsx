import axios from 'axios';
import { API_BASE_URL, getAsync, headers as API_HEADER, post } from './api';
import { User } from '../models/User';

const API_URL = API_BASE_URL;
const headers = API_HEADER;

const api = axios.create({
    baseURL: API_URL,
    headers
  });

export const registerAsync = async (user: User) => {
    try {
        const response = await axios.post(`${API_URL}/api/user/register`, user);
        return response.data;
    }
    catch (error) {
        return error;
    }
};

export const logout = (): void => {
  localStorage.removeItem('ep-token');
  window.location.href = '../login';
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('ep-token');
  let user = null;

  if (token) {
      try {
          const response = await api.get('/api/user/getcurrentuser');
          if (response.status === 200) {
              user = response.data;
          }
      } catch (error) {
          console.log(error);
      }
  } else {
      logout();
  }

  return user;
};
