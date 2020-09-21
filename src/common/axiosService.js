import axios from 'axios';
import {
  getRefreshToken,
  setNewAuth,
  getAuthToken,
  removeAuthToken,
} from './auth';
import history from './history';

class axiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.request.use(
      async (config) => {
        const accessToken = await getAuthToken();
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        console.log(error);

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = getRefreshToken();
          return axios
            .post('http://localhost:4000/v1/api/refresh-token', {
              refreshToken: refreshToken,
            })
            .then((res) => {
              if (res.status === 201) {
                setNewAuth(res.data.result);
                return instance(originalRequest);
              }
            });
        }
        if (error.response.status === 400 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = getRefreshToken();
          return axios
            .post('http://localhost:4000/v1/api/refresh-token', {
              refreshToken: refreshToken,
            })
            .then((res) => {
              if (res.status === 201) {
                setNewAuth(res.data.result);
                axios.defaults.headers.common['Authorization'] =
                  'Bearer ' + getAuthToken();
                return instance(originalRequest);
              }
            })
            .catch((error) => {
              console.log('push');
              history.push('/login');
              window.location.reload();
              removeAuthToken();
            });
        }
        return Promise.reject(error);
      }
    );
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new axiosService();
