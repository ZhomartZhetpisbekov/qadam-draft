import { View, Alert } from "react-native";
import CustomTextInput from "../../../components/common/custom-text-input/CustomTextInput";
import { useState } from "react";
import CustomButton from "../../../components/common/custom-button/CustomButton";
import { auth } from "../../../firebaseConfig";
import uploadPost from "../../../firebase/uploadPost";

import styles from "./create-post-screen.style";
import { useRouter } from "expo-router";

const CreatePostScreen = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const router = useRouter()
	
  const handlePostSubmit = async () => {
    const user = auth.currentUser;    
		if (user && postTitle && postText) {
			await uploadPost(user?.uid, postTitle, postText)
			setPostTitle('')
			setPostText('')
      router.back()
		} else {
			Alert.alert('Type title and post text');
		}

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CustomTextInput
          placeholder="Title"
          value={postTitle}
          setValue={setPostTitle}
          multiline={false}
        />
        <CustomTextInput
          placeholder="Content"
          value={postText}
          setValue={setPostText}
          multiline={true}
        />
      </View>
      <CustomButton 
        onPress={handlePostSubmit}
        btnText='Submit'
      />
    </View>
  );
};

export default CreatePostScreen;
