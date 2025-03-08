import axios from 'axios';
import { API_URL } from '../server'; 

// ----------------- Unauthorized Requests -----------------

export const GetUnAuthReq = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const PostUnAuthReq = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const PutUnAuthReq = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const DeleteUnAuthReq = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};



// ----------------- Authorized Requests -----------------
export const GetAuthReq = async (endpoint, token) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const PostAuthReq = async (endpoint, data, token) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const PutAuthReq = async (endpoint, data, token) => {
  try {
    const response = await axios.put(`${API_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const DeleteAuthReq = async (endpoint, token) => {
  try {
    const response = await axios.delete(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};
