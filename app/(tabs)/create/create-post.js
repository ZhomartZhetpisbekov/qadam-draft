import { Stack } from "expo-router";
import { View, Text, StatusBar } from "react-native";
import styles from "../../../styles/main";
import CreatePostScreen from "../../../screens/create-screen/create-post/CreatePostScreen";

export default function CreatePost() {
  return (
    <>
      <Stack.Screen />
      <CreatePostScreen />
      <StatusBar style="light" />
    </>
  );
}
