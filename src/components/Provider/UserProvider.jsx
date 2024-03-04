import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const UserContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userSignUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleSignUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // observer set
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("observe the current user", currentUser);
            setUser(currentUser);
            setLoading(false);
        }) 
        // clean up
        return () =>{
            unSubscribe();
        }
    },[]);

    const userInfo = {
        user,
        userSignUp,
        loading,
        userSignIn,
        userSignOut,
        googleSignUser
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

UserProvider.propTypes = {
    children: PropTypes.node
}