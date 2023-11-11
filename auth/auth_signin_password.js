import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";

export const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in! ", userCredential.user.email);
    return userCredential; // Return the user credential object
  } catch (error) {
    console.error(error.code, error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
