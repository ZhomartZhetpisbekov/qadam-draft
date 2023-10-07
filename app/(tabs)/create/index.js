import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";

export default function Create() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Create",
        }}
      />
      <View style={styles.container}>
        <Text>Create</Text>
        <StatusBar style="light" />
      </View>
    </>
  );
}
