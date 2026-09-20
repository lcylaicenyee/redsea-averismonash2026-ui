import { useUsers } from '../hooks/useUsers';
import React from 'react';
import { CreateUserForm } from './CreateUserForm';

export interface CreateUserPageProps {
  setShowForm: (bool:boolean) => void;
}

export const CreateUserPage : React.FC<CreateUserPageProps> = ({setShowForm}) => {

    const { createUser } = useUsers();

    const handleCreateUser = async (data: { name: string; email: string; password: string }) => {
    // Handle user creation (mock for demo)
        createUser(data);
        setShowForm(false);
    };

    return (
        <div className="create-user-section">
            <div className="modal-overlay">
            <div className="modal">
            <CreateUserForm
                onSubmit={handleCreateUser}
                onCancel={() => setShowForm(false)}
                />
            </div>
            </div>
        </div>
    );
}