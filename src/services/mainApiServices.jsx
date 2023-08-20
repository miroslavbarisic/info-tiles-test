import axios from 'axios';

import { authHeader } from '../util/authUtil.js';


const API =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

export const getFunc = async (url) => {
  return axios
    .get(`${API}/${url}`, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.log(error, 'error');
    });
};

export const postFunc = async (url, body) => {
  return axios
    .post(`${API}/${url}`, body, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      console.log(response)
      return response;
    })
    .catch((error) => {
     return console.log(error, 'error');
    });
};

export const putFunc = async (url, body) => {
  return axios
    .put(`${API}/${url}`, body, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
       return console.log(error, 'error');
    });
};
export const delFunc = async (url) => {
  return axios
    .delete(`${API}/${url}`, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.log(error, 'error');
    });
};

