import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        router.push("/", { scroll: false });
      })
      .catch((error) => console.log(error));
  };

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        router.push("/", { scroll: false });
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          setAuthError(
            "Invalid credentials. Input correct email and password!"
          );
        }
      });
  };

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    router.push("/", { scroll: false });
  };

  const Logout = () => {
    signOut(auth);
    router.push("/auth/sign-in", { scroll: false });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, loading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        GoogleSignIn,
        Logout,
        SignIn,
        SignUp,
        authError,
        setAuthError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};

export const metadata = {
  title: "Scopify",
  description:
    "A web application built for passionate artists to share artwork to the world.",
};
