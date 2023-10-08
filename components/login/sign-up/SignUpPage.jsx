import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

import { handleSignUp } from "../../../auth/auth_signup_password";
import styles from "./sign-up.style";
import { COLORS } from "../../../constants";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.welcomeText }}>Welcome</Text>
      <Text style={{ ...styles.welcomeText, fontSize: 16, marginBottom: 24 }}>
        Create an account in a few clicks
      </Text>
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
          handleSignUp(email, password);
        }}
        style={styles.signUpBtn}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.replace("/sign-in");
        }}
        style={styles.linkBtn}
      >
        <Text style={styles.linkText}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;
