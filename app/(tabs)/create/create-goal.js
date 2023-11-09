import { Stack } from "expo-router";
import { View, Text,StatusBar } from "react-native";
import styles from "../../../styles/main";

export default function CreateGoal() {
  return (
		<>
			<Stack.Screen />
			<View style={styles.container}>
				<Text>Goal</Text>
				<StatusBar style="light" />
			</View>
		</>
	)
}
