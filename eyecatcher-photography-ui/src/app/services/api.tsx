import axios from 'axios';

export const API_BASE_URL = 'https://localhost:7081';
// const API_BASE_URL = 'https://congenial-space-spork-7xgqqxp74vpcx6w4-7081.app.github.dev';
// const API_BASE_URL = 'https://ec2-13-215-199-157.ap-southeast-1.compute.amazonaws.com';
export var headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1QgZm9yIEV5ZWNhdGNoZXIgUGhvdG9ncmFwaHkiLCJqdGkiOiI4MTk1ZjY0Yi1jNDgyLTRhNmMtOTc4ZS1iMzY0OGE0ODMyMmUiLCJpYXQiOiIwOS8yMS8yMDIzIDEyOjAzOjQyIFBNIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIyMmRjOTg3OS1iNWY3LTRmZmYtYmQ4ZC1iMzgyMTQ1NWI2ZDUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2t5ZTA4MTQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJza3llMDgxNEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzAzOTM3ODIxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDgxIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA4MSJ9.1Lx-Wz1tzAXoD0oUjMYhgsIByRSOBGl-rGLMaDNzZrY'
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
