import axios, { AxiosError, AxiosResponse } from "axios";

const timeout = 30000;

export const axiosInstance = axios.create({
  baseURL: "input base url",
  timeout,
});

const handleError = (err: AxiosError) => {
  if (err && err.response && err.response.data) {
    return Promise.reject(err.response.data);
  } else {
    return Promise.reject(err);
  }
};

const handleResponse = (res: AxiosResponse<any>) => {
  return res.data;
};

axiosInstance.interceptors.response.use(handleResponse, handleError);
