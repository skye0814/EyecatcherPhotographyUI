import axios from 'axios';

export const API_BASE_URL = 'https://localhost:7081';
// const API_BASE_URL = 'https://congenial-space-spork-7xgqqxp74vpcx6w4-7081.app.github.dev';
// const API_BASE_URL = 'https://ec2-13-215-199-157.ap-southeast-1.compute.amazonaws.com';
export var headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1QgZm9yIEV5ZWNhdGNoZXIgUGhvdG9ncmFwaHkiLCJqdGkiOiIwMTM5OTE3Mi03MWZlLTRmNDEtYjEyMC00Y2Y1ZjM0ZjE4NWIiLCJpYXQiOiIwOS8xNi8yMDIzIDU6MDA6MTIgUE0iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIyZGM5ODc5LWI1ZjctNGZmZi1iZDhkLWIzODIxNDU1YjZkNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJza3llMDgxNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNreWUwODE0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJleHAiOjE3MDM1MjM2MTIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDgxIn0.Bw7Uv9Ehdr3MquhxP93GzVh7YOBxAduWBFeHtkwyIhY'
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers
});

export const getAsync = async (url: string) => {
  try 
  {
    const response = await api.get(url);
    return response.data;
  } 
  catch (error) 
  {
    throw error;
  }
};

export const get = (url: string) => {
  return api
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

export const postAsync = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = (url: string, data: any) => {
  return api
    .post(url, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
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
