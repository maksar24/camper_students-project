import axios from 'axios';

axios.defaults.baseURL = 'https://616742b1ba841a001727c2c5.mockapi.io';

export const getVansApi = async () => {
  const { data } = await axios.get('/data');
  return data;
};
