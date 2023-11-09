import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useRouter } from "expo-router";

export const signUpUser = async (email, password, username, firstName, lastName, imageUri) => {
    console.log('Image uri: ', imageUri)
    return createUserWithEmailAndPassword(auth, email, password).then(async userCredential => {
      // Signed up
      const uid = userCredential.user.uid;
      let photoURL = '';
  
      if (imageUri) {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const storageRef = ref(storage, `user_profile_photos/${uid}`);
        uploadBytes(storageRef, blob).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        photoURL = storageRef.fullPath
      }
  
      await setDoc(doc(db, "users", uid), {
        username,
        email,
        firstName,
        lastName,
        photoURL,
      });
      return {success: true};
    }).catch(error => {
      return { success: false, error: error.message };
    }); 
};