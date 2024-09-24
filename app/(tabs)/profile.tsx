import ThemedView, { ThemedText } from "@/components/ThemedComponents";
import { View, Text, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Profile() {
  const colorBackground = useThemeColor({}, "background");
  const styles = StyleSheet.create({
    container_global: {
      flex: 1,
      backgroundColor: colorBackground,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });
  return (
    <ThemedView style={styles.container_global}>
      <ThemedText>Adios mundo</ThemedText>
    </ThemedView>
  );
}
