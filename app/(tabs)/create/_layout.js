import { Stack } from "expo-router";
import { COLORS } from "../../../constants";

export default function CreateLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: COLORS.bgSecondary },
        headerTitleStyle: { color: COLORS.white },
        headerBackTitleVisible: false,
        headerBackTitleStyle: {color: COLORS.orange},
        title: "Create",
      }}
    />
  );
}
