import { Stack } from "expo-router";
import { COLORS } from "../../../constants";

export default function GoalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: COLORS.bgSecondary },
        headerTitleStyle: { color: COLORS.white },
        headerBackTitleVisible: false,
        headerBackTitleStyle: { color: COLORS.orange },
        title: "Goals",
      }}
    />
  );
}
