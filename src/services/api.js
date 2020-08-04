import axios from 'axios';

const { REACT_APP_API_BASE_URL } = process.env;

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

};
