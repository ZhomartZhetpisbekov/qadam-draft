import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";
import { COLORS } from "../../../constants";

import PostsList from "../../../components/posts/posts-list/PostsList";

export default function Feed() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.bgSecondary },
          headerTitleStyle: { color: COLORS.white },
          title: "Qadam",
        }}
      />
      <View style={styles.container}>
        <PostsList />
        <StatusBar style="light" />
      </View>
    </>
  );
}
