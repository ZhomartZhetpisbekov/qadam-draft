import { useState } from "react";
import { Stack } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";
import { handleSignup } from "../../../auth/auth_signup_password";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Profile",
        }}
      />
      <View style={styles.container}>
        <Text>Profile</Text>
        <StatusBar style="light" />
        <TextInput
          
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => handleSignup(email, password)}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
