import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "react-native-paper";

export default function Home() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container_global: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container_global}>
      <Text>Adios mundo</Text>
    </View>
  );
}
