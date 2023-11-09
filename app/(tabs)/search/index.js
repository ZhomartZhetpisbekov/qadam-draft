import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

import styles from "../../../styles/main";

export default function Search() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Text>Search</Text>
        <StatusBar style="light" />
      </View>
    </>
  );
}
