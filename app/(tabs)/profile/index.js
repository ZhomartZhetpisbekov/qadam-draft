import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../styles/main";
import { useAuth } from "../../../hooks/useAuth";
import { COLORS } from "../../../constants";

export default function Profile() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Profile",
        }}
      />
      <View style={styles.container}>
        <Text style={{ color: COLORS.white }}>{currentUser?.email}</Text>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: COLORS.orange,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: COLORS.white }}>Sign Out</Text>
        </TouchableOpacity>
        <StatusBar style="light" />
      </View>
    </>
  );
}
