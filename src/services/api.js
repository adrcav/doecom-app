import axios from 'axios';

const { REACT_APP_API_BASE_URL, REACT_APP_GEOCODE_API_URL } = process.env;

export default class Api {

  constructor(auth) {
    if (!!Api.instance) {
      return Api.instance;
    }

    this.axios = axios.create({
      baseURL: REACT_APP_API_BASE_URL
    });

    this.axios.interceptors.request.use((config) => {
      config.headers.Authorization = auth.getCredentials();
      return config;
    });

    this.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if ([401, 403].includes(error.response.status)) {
          auth.logout();
          window.location.href = '/';
        }
        else if (error.response && error.response.data) {
          return Promise.reject(error.response.data);
        }
        else {
          return Promise.reject(error.message);
        }
    });

    Api.instance = this;
    return this;
  }

  uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    return this.axios.put(
      '/image',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
  }

  getLocaleByCoordinates(lat, lng) {
    return this.axios.get(`/${lat},${lng}?geoit=json`, { baseURL: REACT_APP_GEOCODE_API_URL });
  }

};
