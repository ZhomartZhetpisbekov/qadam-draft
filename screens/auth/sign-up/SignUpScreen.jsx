import { useState } from "react";
import { View, TextInput, Button, Text, Alert, TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { useRouter } from "expo-router";
import SignUpForm from "../../../components/sign-up-form/SignUpForm";
import { signUpUser } from "../../../auth/auth_signup_password";

import { handleSignUp } from "../../../auth/auth_signup_password";
import styles from "./sign-up.style";
import { COLORS } from "../../../constants";

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const router = useRouter()

  const handleSignUp = async () => {
    setUploading(true);
    const { success, error } = await signUpUser(email, password, username, firstName, lastName, image);
    setUploading(false);
    if (success) {
      // Navigate to the profile page or another part of your app
      console.log("Signed up! ");
      router.replace("/");
    } else {
      Alert.alert('Error signing up', error);
    }
  };

  return (
    <View style={styles.container}>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        username={username}
        setUsername={setUsername}
        setImage={setImage}
        image={image}
      />
      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp} disabled={uploading}><Text style={styles.signUpText}>Sign Up</Text></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.replace("/sign-in");
        }}
        style={styles.linkBtn}
      >
        <Text style={styles.linkText}>Already have an account? Click here</Text>
      </TouchableOpacity>
      {uploading && <Text style={styles.signUpText}>Signing Up...</Text>}
    </View>
  );
};

export default SignUpScreen;
