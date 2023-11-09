import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

import { handleSignIn } from "../../../auth/auth_signin_password";
import styles from "./sign-in.style";
import { COLORS } from "../../../constants";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        placeholderTextColor={COLORS.darkGray}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        placeholderTextColor={COLORS.darkGray}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          handleSignIn(email, password);
        }}
        style={styles.signInBtn}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.replace("/sign-up");
        }}
        style={styles.linkBtn}
      >
        <Text style={styles.linkText}>Don't have an account? Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
