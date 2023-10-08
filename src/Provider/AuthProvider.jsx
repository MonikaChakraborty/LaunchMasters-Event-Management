import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

  

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


      // create user
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // logout user
    const logOut = () => {
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
          });
          
    }, [])


    console.log(user);


    const authentications = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;