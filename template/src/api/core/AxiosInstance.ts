import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

const instance: AxiosInstance = axios.create();

const isDevelopment = process.env.NODE_ENV === "development";
const REACT_APP_LIFERAY_HOST = isDevelopment
    ? process.env.REACT_APP_LIFERAY_HOST
    : window.location.origin;

instance.defaults.baseURL = REACT_APP_LIFERAY_HOST;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (isDevelopment) {
        const username = process.env.REACT_APP_USER_NAME;
        const password = process.env.REACT_APP_PASSWORD;
        const account = `${username}:${password}`;
        config.headers.Authorization = `Basic ${btoa(account)}`;
    }else {
        config.headers["X-Csrf-Token"] = window.Liferay?.authToken;
    }
    return config;
  }
);

instance.interceptors.response.use(
  async response => response,
  (error: AxiosError) => {
    const { data } = error?.response as AxiosResponse<unknown>;
    return Promise.reject(data);
  }
);

export default instance;
