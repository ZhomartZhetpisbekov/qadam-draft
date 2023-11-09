import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";

export default function Goals() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Text>Goals</Text>
        <StatusBar style="light" />
      </View>
    </>
  );
}
