import { UserList } from './UserList';
import { UserForm } from './UserForm';
import '../styles.css';
import { useUsers } from '../hooks/useUsers';
import React from 'react';

export const UserContent : React.FC = () => {

    const { createUser } = useUsers();

    const [showForm, setShowForm] = React.useState(false);

    const handleCreateUser = async (data: { name: string; email: string; password: string }) => {
    // Handle user creation (mock for demo)
        createUser(data);
        setShowForm(false);
    };

    return (
        <main className="main-content">
            <UserList />
            <div className="create-user-section">
            <button onClick={() => setShowForm(true)}>
                + Add New User
            </button>

            {showForm && (
                <div className="modal-overlay">
                <div className="modal">
                    <UserForm
                    onSubmit={handleCreateUser}
                    onCancel={() => setShowForm(false)}
                    />
                </div>
                </div>
            )}
            </div>
        </main>
    )
}