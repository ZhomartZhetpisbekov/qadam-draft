import { Redirect } from "expo-router";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator } from "react-native";
import { useSession } from "../hooks/useSession";

export default function App() {
  const {session, isLoading} = useSession()
  console.log(session, isLoading);

  if (isLoading) {
    return <ActivityIndicator />; // Or a loading spinner
  }

  return session ? (
    <Redirect href={"/(tabs)/feed"} />
  ) : (
    <Redirect href={"/sign-in"} />
  );
}
