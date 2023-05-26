import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth (app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    // mail signIn and signOut system
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // others signIn system
    const googleSign=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //OBSERVE authState change
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        // stop observing while unmounting
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user, loading, createUser, signInUser, logOut, googleSign
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;