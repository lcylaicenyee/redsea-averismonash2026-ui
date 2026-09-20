import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;
  //private baseURL: string;

  constructor(baseURL: string = '/api/v1') {
    //this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' }
    });

    // Add auth interceptor
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Handle auth errors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // All methods return Promise<AxiosResponse<T>>
  public get<T>(url: string) {
    return this.client.get<T>(url);
  }

  public post<T>(url: string, data?: object) {
    return this.client.post<T>(url, data);
  }

  public put<T>(url: string, data?: object) {
    return this.client.put<T>(url, data);
  }

  public delete<T>(url: string) {
    return this.client.delete<T>(url);
  }
}

export const api = new ApiClient();