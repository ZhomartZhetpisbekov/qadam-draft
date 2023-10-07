import { Image, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import { COLORS, icons } from "../../constants";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.bgSecondary,
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: "Feed",
          title: "Feed",
          tabBarIcon: () => (
            <Image source={icons.home} style={styles.tabIcon(25)} />
          ),
          tabBarIconStyle: styles.tabIcon,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          title: "Search",
          tabBarIcon: () => (
            <Image source={icons.search} style={styles.tabIcon(25)} />
          ),
          tabBarIconStyle: styles.tabIcon,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarLabel: "Create",
          title: "Create",
          tabBarIcon: () => (
            <Image source={icons.create} style={styles.tabIcon(50)} />
          ),
          tabBarIconStyle: styles.tabIcon,
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          tabBarLabel: "Goals",
          title: "Goals",
          tabBarIcon: () => (
            <Image source={icons.bell} style={styles.tabIcon(25)} />
          ),
          tabBarIconStyle: styles.tabIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: () => (
            <Image source={icons.profile} style={styles.tabIcon(25)} />
          ),
          tabBarIconStyle: styles.tabIcon,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: (size) => ({
    width: size,
    height: size,
    resizeMode: "contain",
  }),
});
