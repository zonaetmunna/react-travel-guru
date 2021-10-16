import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInWithGoogle = () => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user)
               })
               .finally(() => setIsLoading(false));
     }

     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user);
               }
               else {
                    setUser({});
               }
               setIsLoading(false)
          })

          return () => unsubscribed;
     }, [])

     const logOut = () => {
          setIsLoading(true);
          signOut(auth)
               .then(() => {
                    setUser('')
               })
               .finally(() => isLoading(false))

     };

     return {
          user,
          signInWithGoogle,
          isLoading, logOut
     }
}

export default useFirebase;



