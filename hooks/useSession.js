import React, {useEffect} from "react";
import { useStorageState } from "./useStorageState";
import { handleSignIn } from "../auth/auth_signin_password";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";

const AuthContext = React.createContext({
  signIn: () => {},
  signOut: async () => {},
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return value;
}

export function SessionProvider(props) {
  const [[isLoading, session], setSession] = useStorageState("session");
	const router = useRouter();

	useEffect(() => {
    if (session) {
      router.replace("/"); // Navigate when session is updated
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          try {
            const userCredential = await handleSignIn(email, password);
            if (userCredential.user) {
              setSession(userCredential.user.uid); // Update session state here
            }
          } catch (error) {
            console.error("Error during sign in:", error);
            // Handle sign-in errors
          }
        },
        signOut: async () => {
          await signOut(auth);
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
