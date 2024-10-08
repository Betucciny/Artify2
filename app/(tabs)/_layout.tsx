import MyTabBar from "@/components/MyTabs";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
  });

  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home Screen",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          href: "/home",
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          ),
          href: "/gallery",
        }}
      />
      <Tabs.Screen
        name="styles"
        options={{
          title: "Styles",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="color-palette" size={size} color={color} />
          ),
          href: "/styles",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          href: "/settings",
        }}
      />
    </Tabs>
  );
}
