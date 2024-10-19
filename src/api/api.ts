import axios from 'axios';

const API_URL = 'https://procco-backend.onrender.com'; // Replace with your actual Render backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = (username: string, password: string) => {
  return api.post('/register', { username, password });
};

export const submitServiceRequest = (serviceRequest: any) => {
  return api.post('/service-request', serviceRequest);
};

export const getServiceRequests = () => {
  return api.get('/service-requests');
};

export default api;