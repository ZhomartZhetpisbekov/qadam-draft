import { Redirect } from "expo-router";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator } from "react-native";

export default function App() {
  const { isAuthenticated, initializing } = useAuth();

  if (initializing) {
    return <ActivityIndicator />; // Or a loading spinner
  }

  return isAuthenticated ? (
    <Redirect href={"/(tabs)/feed"} />
  ) : (
    <Redirect href={"/sign-in"} />
  );
}
