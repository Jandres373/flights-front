import axios, { AxiosError, AxiosResponse } from "axios";

type Path = "/users" | "/users/reset_password" | "/login" | "/flights" | "/flights/findFlight" | "/countries" | `/countries/${number}` | "/countries/places" | `/places/${string}`| `/users/reset_password/${string}` | `/users/verify/${string}`;

export interface Params {
  BASE_URL: string;
  PATH: Path;
  DATA?: any;
}

interface ApiResponse<T = any> extends AxiosResponse<T> { }

export const apiConnection = {
  get: async <T>(params: Params): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.get<T>(`${params.BASE_URL}${params.PATH}`);
      return response;
    } catch (error) {
      throw handleAxiosError(error as AxiosError);
    }
  },
  post: async <T>(params: Params, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.post<T>(`${params.BASE_URL}${params.PATH}`, data);
      return response;
    } catch (error) {
      throw handleAxiosError(error as AxiosError);
    }
  },
  put: async <T>(params: Params, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.put<T>(`${params.BASE_URL}${params.PATH}`, data);
      return response;
    } catch (error) {
      throw handleAxiosError(error as AxiosError);
    }
  },
  delete: async <T>(params: Params): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.delete<T>(`${params.BASE_URL}${params.PATH}`);
      return response;
    } catch (error) {
      throw handleAxiosError(error as AxiosError);
    }
  },
};

function handleAxiosError(error: AxiosError): void {
  if (axios.isAxiosError(error)) {

    console.error("Axios Error:", error.message);
  } else {
    console.error("Error:", error);
  }

  throw error;
}
