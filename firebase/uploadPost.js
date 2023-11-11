import { db } from "../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const uploadPost = async (uid, title, text) => {
  try {
    await addDoc(collection(db, 'posts'), {
      uid, // Storing only the user's UID
      title,
      text,
      createdAt: Timestamp.now(),
    });
    console.log("Post uploaded successfully.");
  } catch (error) {
    console.error("Error uploading post: ", error);
  }
};

export default uploadPost;
