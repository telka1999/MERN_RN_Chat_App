import { useState, useEffect } from "react";
import { firebaseAuth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
const auth = firebaseAuth;
export const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);
  return {
    user,
  };
};
