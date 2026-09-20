import { useState, useCallback } from 'react';
import { userService } from '../api';
import { ApiResponse, User } from '../types/user';
import { useUserContext } from '../context/UserContext';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUserContext();

  const fetchUsers = useCallback(async () => {
    if (!user) 
    {
      setError("Not Logged In! Please Log in to Proceed");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await userService.getAll();
      setUsers(response.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, [user]);

  const createUser = useCallback(async (data: { name: string; email: string; password: string }) => {
    try {
      const response : ApiResponse<User> = await userService.create(data);
      setUsers(prev => [response.data!, ...prev]);
      return response.data;
    } catch (err) {
      throw err instanceof Error ? err.message : 'Failed to create user';
    }
  }, []);

  const updateUser = useCallback(async (id: string, data: Partial<User>) => {
    try {
      const response = await userService.update(id, data);
      setUsers(prev => prev.map(u => u._id === id ? { ...u, ...response.data } : u));
      return response.data;
    } catch (err) {
      throw err instanceof Error ? err.message : 'Failed to update user';
    }
  }, []);

  const deleteUser = useCallback(async (id: string) => {
    try {
      await userService.delete(id);
      setUsers(prev => prev.filter(u => u._id !== id));
      return true;
    } catch (err) {
      throw err instanceof Error ? err.message : 'Failed to delete user';
    }
  }, []);

  return {
    users,
    loading,
    error,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
  };
};