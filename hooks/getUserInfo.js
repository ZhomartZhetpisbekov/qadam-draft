import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Helper function to retrieve user info
const getUserInfo = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Return the user data if exists
    } else {
      console.log("No such user!");
      return null; // Return null if user does not exist
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null; // Return null in case of an error
  }
};

export default getUserInfo;
