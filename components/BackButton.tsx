import { IconButton, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function BackButton() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingTop: 50,
    },
    topBar: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      marginTop: 50,
      zIndex: 1,
      top: 0,
      left: 0,
    },
  });
  return (
    <View style={styles.topBar}>
      <IconButton
        icon="chevron-left"
        mode="contained"
        size={50}
        // iconColor={colors.background}
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
}
