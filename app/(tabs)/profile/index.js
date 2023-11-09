import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";
import { useAuth } from "../../../hooks/useAuth";
import { COLORS } from "../../../constants";
import ProfileScreen from "../../../screens/profile-screen/ProfileScreen";

export default function Profile() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <>
      <Stack.Screen />
      {/* <View style={styles.container}> */}
        <ProfileScreen user={currentUser}/>
        <StatusBar style="light" />
      {/* </View> */}
    </>
  );
}
