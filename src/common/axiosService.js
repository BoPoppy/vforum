import axios from 'axios';
class axiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    console.log(error);
    return Promise.reject(error);
  }

  get(url, headers) {
    return this.instance.get(url, headers);
  }

  post(url, body, headers) {
    return this.instance.post(url, body, headers);
  }

  patch(url, body, headers) {
    return this.instance.patch(url, body, headers);
  }
}

export default new axiosService();
