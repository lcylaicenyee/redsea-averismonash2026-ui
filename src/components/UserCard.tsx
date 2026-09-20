import React from 'react';
import { User } from '../types/user';

export interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p className="email">{user.email}</p>
        <span className={`role-badge ${user.role}`}>{user.role}</span>
      </div>

      <div className="user-status">
        <span className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}>
          {user.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <div className="user-meta">
        <span>Created: {new Date(user.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};