import { api } from './client';
import { ApiResponse } from '../types/user';
import { User } from '../types/user';
import { AxiosResponse } from 'axios';

// Helper to extract data from AxiosResponse
const extractData = <T>(response: AxiosResponse<T>): T => response.data;

export const userService = {
  // Get all users - returns Promise<ApiResponse<User[]>>
  getAll: async (): Promise<ApiResponse<User[]>> => {
    const response = await api.get<ApiResponse<User[]>>('/users');
    return extractData(response);
  },

  // Get user by ID - returns Promise<ApiResponse<User>>
  getById: async (id: string): Promise<ApiResponse<User>> => {
    const response = await api.get<ApiResponse<User>>(`/users/${id}`);
    return extractData(response);
  },

  // Create user - returns Promise<ApiResponse<User>>
  create: async (data: { name: string; email: string; password: string }): Promise<ApiResponse<User>> => {
    const response = await api.post<ApiResponse<User>>('/users', data);
    return extractData(response);
  },

  // Update user - returns Promise<ApiResponse<User>>
  update: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await api.put<ApiResponse<User>>(`/users/${id}`, data);
    return extractData(response);
  },

  // Delete user - returns Promise<ApiResponse<void>>
  delete: async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete<ApiResponse<void>>(`/users/${id}`);
    return extractData(response);
  },

  // Login - returns Promise<ApiResponse<{ token: string; user: User }>>
  login: async (data: { email: string; password: string }): Promise<ApiResponse<{ token: string; user: User }>> => {
    const response = await api.post<ApiResponse<{ token: string; user: User }>>('/users/login', data);
    return extractData(response);
  }
};