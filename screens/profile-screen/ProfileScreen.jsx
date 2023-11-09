import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import styles from "./profile-screen.style";
import getDownloadURI from "../../utils/getDownloadURI";
import { useRouter } from "expo-router";

const ProfileScreen = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [profileImg, setProfileImg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  );
  const placeholderImage = require("../../assets/images/profile-img-placeholder.png"); // Update with the correct path

	const router = useRouter()

  // Fetch user data from Firestore
  const fetchUserData = async () => {
    try {
      const docRef = doc(db, "users", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const res = docSnap.data();
        setUserData(res);
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  useEffect(() => {
    // Fetch the profile img from Storage
    if (userData?.photoURL) {
      getDownloadURI(userData.photoURL)
        .then((url) => {
          setProfileImg(url);
        })
        .catch((err) => console.error("Error downloading photo", err));
    }
  }, [userData]);

	const handleSignOut = async () => {
		await signOut(auth);
		router.replace('/')
	}

  if (!userData) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImg }} style={styles.profileImage} />
      <Text style={styles.text}>Username: {userData?.username}</Text>
      <Text style={styles.text}>First Name: {userData?.firstName}</Text>
      <Text style={styles.text}>Last Name: {userData?.lastName}</Text>
      <Text style={styles.text}>Email: {userData?.email}</Text>
			<TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}><Text style={styles.text}>Sign Out</Text></TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
