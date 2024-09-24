import ThemedView, { ThemedText } from "@/components/ThemedComponents";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function Create() {
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
