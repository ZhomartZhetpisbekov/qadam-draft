import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ProfileScreen from "../../../screens/profile-screen/ProfileScreen";
import { auth } from "../../../firebaseConfig";

export default function Profile() {
  const user = auth.currentUser
  console.log('user: ', user)

  return (
    <>
      <Stack.Screen />
      {/* <View style={styles.container}> */}
        <ProfileScreen user={user}/>
        <StatusBar style="light" />
      {/* </View> */}
    </>
  );
}
