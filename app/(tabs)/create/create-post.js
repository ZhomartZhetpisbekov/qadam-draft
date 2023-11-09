import { Stack } from "expo-router";
import { View, Text,StatusBar } from "react-native";
import styles from "../../../styles/main";

export default function CreatePost() {
  return (
		<>
			<Stack.Screen />
			<View style={styles.container}>
				<Text>Post</Text>
				<StatusBar style="light" />
			</View>
		</>
	)
}
