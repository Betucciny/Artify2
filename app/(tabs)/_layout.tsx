import MyTabBar from "@/components/MyTabs";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
  });

  const navigation = useNavigation();

  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home Screen",
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerLeftContainerStyle: { paddingLeft: 10 },
          tabBarShowLabel: false,
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
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
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          ),
          href: "/gallery",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
          href: "/create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          href: "/profile",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          href: "/settings",
        }}
      />
    </Tabs>
  );
}
