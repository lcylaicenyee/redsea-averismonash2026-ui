import React from 'react';
import { useUserContext } from '../context/UserContext';
import { LoginUserForm } from './LoginUserForm';

export interface LoginUserPageProps {
  setShowForm: (bool:boolean) => void;
}

export const LoginUserPage : React.FC<LoginUserPageProps> = ({setShowForm}) => {

    const { login } = useUserContext();

    const handleLoginUser = async (data: { email: string; password: string }) => {
    // Handle user creation (mock for demo)
        login(data.email, data.password);
        setShowForm(false);
    };

    return (
        <div className="create-user-section">
            <div className="modal-overlay">
            <div className="modal">
            <LoginUserForm
                onSubmit={handleLoginUser}
                onCancel={() => setShowForm(false)}
                />
            </div>
            </div>
        </div>
    );
}