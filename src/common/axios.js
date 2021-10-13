import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://3.34.44.44/',
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  return config;
});

export default instance;