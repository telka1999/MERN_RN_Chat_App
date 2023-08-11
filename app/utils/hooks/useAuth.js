import { useState, useEffect } from "react";
import { firebaseAuth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      }
    );
    return unsubscribeFromAuthStatuChanged;
  }, []);
  return {
    user,
  };
};
