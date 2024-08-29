'use client';

import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';

const AdminLayout = ({ children, login }) => {
    const { user } = useAuthContext();

    // const authContext = useAuthContext();
    // const user = authContext?.user;

    return <div>{user ? children : login}</div>;
};

export default AdminLayout;
