import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";

export default function Profile() {
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
      </View>
    </>
  );
}
