import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";
import CreateScreen from "../../../screens/create-screen/CreateScreen";

export default function Create() {
  return (
    <>
      <Stack.Screen/>
      
      <View style={styles.container}>
        <CreateScreen />
        <StatusBar style="light" />
      </View>
    </>
  );
}
