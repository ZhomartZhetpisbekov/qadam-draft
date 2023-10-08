import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const handleSignup = (email, password) => {
  //   const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(email, password);
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(email, password);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage, "SALAM");
      // ..
    });
};
