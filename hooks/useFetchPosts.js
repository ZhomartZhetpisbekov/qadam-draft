import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig"; // Your Firebase configuration
import getDownloadURI from "../utils/getDownloadURI";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
	const placeholderImg = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === "added" || change.type === "modified") {
          const postData = change.doc.data();
          const userRef = doc(db, "users", postData.uid);
          const userSnap = await getDoc(userRef);

					// Fetch the download URL for the user's profile picture if it exists
          if (userSnap.exists() && userSnap.data().photoURL) {
            userProfilePic = await getDownloadURI(userSnap.data().photoURL);
          }

          const post = {
            id: change.doc.id,
            profilePic: userProfilePic ? userProfilePic : placeholderImg,
            profileName: userSnap.exists() ? userSnap.data().username : "",
            date: postData.createdAt.toDate().toLocaleDateString(),
            goal: "How to become a frontend developer", // Hardcoded
            title: postData.title,
            content: postData.text,
            likesNum: 243, // Hardcoded
            commentsNum: 76, // Hardcoded
          };

          setPosts((prevPosts) => {
            const existingPosts = prevPosts.filter((p) => p.id !== post.id);
            return [post, ...existingPosts];
          });
        }
      });
    });

    return () => unsubscribe();
  }, []);

  return posts;
};

export default useFetchPosts;