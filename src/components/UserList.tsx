import React from 'react';
import { UserCard } from './UserCard.tsx';
import { useUsers } from '../hooks/useUsers.ts';
import { LoadingSpinner } from './LoadingSpinner.tsx';

export const UserList: React.FC = () => {
  const { users, loading, error, fetchUsers } = useUsers();

  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div className="user-list">
      <div className="list-header">
        <h2>Users</h2>
        <button onClick={handleRefresh} disabled={loading}>
          Refresh
        </button>
      </div>

      {loading && <LoadingSpinner />}

      {loading && <div className="loading">Loading users...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading && !error && users.length === 0 && (
        <div className="empty">No users found</div>
      )}

      {!loading && !error && (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};