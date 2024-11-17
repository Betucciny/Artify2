import { router } from "expo-router";
import { View, StyleSheet, Text, Image } from "react-native";
import { ActivityIndicator, Button, useTheme } from "react-native-paper";
import useDataAssets from "@/hooks/useDataAssets";

export default function App() {
  const theme = useTheme();
  const { loading } = useDataAssets();
  const styles = StyleSheet.create({
    container_global: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    sub_container: {
      justifyContent: "center",
      alignItems: "center",
    },
    title_text: {
      color: theme.colors.primary,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
    description_text: {
      color: theme.colors.onBackground,
      fontSize: 20,
      fontWeight: "normal",
    },
    logo_image: {
      borderRadius: 100,
      width: 300,
      height: 300,
    },
    button: {
      borderRadius: 100,
      padding: 20,
      backgroundColor: "green",
    },
    image: {
      width: 250,
      height: 250,
      resizeMode: "contain",
    },
  });

  const controlOnPress = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container_global}>
      <View style={styles.sub_container}>
        <Image
          source={require("../assets/images/logo1.png")}
          style={styles.image}
        />
        <Text style={styles.description_text}>Apply Artistic Styles</Text>
      </View>
      <View style={styles.sub_container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button mode="contained" onPress={controlOnPress}>
            Get Started
          </Button>
        )}
      </View>
    </View>
  );
}
