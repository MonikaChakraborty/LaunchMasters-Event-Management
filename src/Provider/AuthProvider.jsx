import { createContext } from "react";
import { auth } from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const authentications = {
        googleLogin,
        createUser
    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;