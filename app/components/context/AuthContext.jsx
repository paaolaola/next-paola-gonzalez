'use client';

import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email:null,
        uid:null,
    });
    
    const registerUser = async (values) =>{
await createUserWithEmailAndPassword(auth, values.email, values.password)
}

const loginUser = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async () => {
        await signOut();
    }
const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

    return <AuthContext.Provider values={
        {
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin

        }
    }>
        {children}  
    </AuthContext.Provider>;
}
