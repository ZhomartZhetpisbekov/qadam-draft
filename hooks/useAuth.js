import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        setUser(user);
        setIsAuthenticated(true);
      } else {
        console.log("not authenticated");
        setIsAuthenticated(false);
      }
      if (initializing) setInitializing(false);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [initializing]);

  return { isAuthenticated, initializing, user };
}
