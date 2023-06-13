import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bbee3c517ada4ebb92c31d2a69bba687",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchData<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
