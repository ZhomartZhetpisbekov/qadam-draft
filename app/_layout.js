import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import { AuthProvider } from "../hooks/useAuth";
import { SessionProvider } from "../hooks/useSession";

export default function Layout() {
  return (
    <SessionProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgSecondary }}>
        <Slot />
      </SafeAreaView>
    </SessionProvider>
  );
}
