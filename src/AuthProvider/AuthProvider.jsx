 
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../FIreBase/Firebase.config';
 

export const AuthContext = createContext('')

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    // firebaseConnected

    // newUserRegisterEmailAndPassword 

    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email and password login 
    const oldUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }






    // current user check 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [])

    const authInfo = {
        user,
        newUser,
        oldUser,
        loading,
        setLoading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;