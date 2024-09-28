import { StyleSheet, View, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Screen from "@/components/Screen";
import { Link, useRouter } from "expo-router";

export default function Styles() {
  const router = useRouter();
  return (
    <Screen title="Styles">
      <Text>Styles</Text>
    </Screen>
  );
}
