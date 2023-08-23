import axios from 'axios';

// const API_BASE_URL = 'https://localhost:7081';
const API_BASE_URL = 'https://congenial-space-spork-7xgqqxp74vpcx6w4-7081.app.github.dev';
export var headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1QgZm9yIEV5ZWNhdGNoZXIgUGhvdG9ncmFwaHkiLCJqdGkiOiI5ZWMzNjlmNy0xNTAyLTRiZmEtOTAxMC03MDk0MzAxYTc4NTciLCJpYXQiOiIwOC8wNi8yMDIzIDE6MzE6NTEgQU0iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIyZGM5ODc5LWI1ZjctNGZmZi1iZDhkLWIzODIxNDU1YjZkNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InVzZXIyQGdtYWlsLmNvbSIsImV4cCI6MTY5OTkyNTUxMSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA4MSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODEifQ.oaFMaeMpO5dKu4ryqt5PG6-aliqxg-83R__IKZFM14U'
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers
});

export const get = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url: string, data: any) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const del = async (url: string) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
