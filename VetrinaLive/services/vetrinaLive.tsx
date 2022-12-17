import {HttpMethods} from '../hooks/useApi';
const {GET} = HttpMethods;

export const news = () => {
  return {
    path: '/news',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export const products = () => {
  return {
    path: '/products',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export const payments = () => {
  return {
    path: '/payments',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};