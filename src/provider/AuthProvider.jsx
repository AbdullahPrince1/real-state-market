import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //! register using email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //! Log out User
  const logOutUser = () => {
    return signOut(auth);
  };
  //! Login User
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! Observer
  useEffect(() => {
    const unSubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = { createUser, user, setUser, logOutUser, logInUser };
  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
}
export { AuthContext };
