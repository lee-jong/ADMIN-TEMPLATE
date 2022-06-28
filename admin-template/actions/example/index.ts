import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance } from "actions";

/**
 * params & axiosResponse data
 * type setting
 */

const examplePostApi = async (
  data?: any,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<any>> =>
  await axiosInstance.post("url", data, options);

const exampleGetApi = async (
  data?: any,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<any>> =>
  await axiosInstance.get("url", {
    data,
    ...options,
  });

const exampleDeleteApi = async (
  data?: any,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<any>> =>
  await axiosInstance.delete("url", {
    data,
    ...options,
  });

const examplePutApi = async (
  data?: any,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<any>> =>
  await axiosInstance.put("url", {
    data,
    ...options,
  });

export default {
  examplePostApi,
  exampleGetApi,
  exampleDeleteApi,
  examplePutApi,
};
