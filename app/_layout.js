import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgSecondary }}>
      <Slot />
    </SafeAreaView>
  );
}
