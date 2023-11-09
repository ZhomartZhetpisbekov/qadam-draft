import { Stack } from "expo-router";
import { View, StatusBar } from "react-native";
import styles from "../../../styles/main";
import { COLORS } from "../../../constants";

import FeedScreen from "../../../screens/feed-screen/FeedScreen";

export default function Feed() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <FeedScreen />
        <StatusBar style="light" />
      </View>
    </>
  );
}
