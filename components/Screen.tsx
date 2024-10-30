import { View, StyleSheet, ScrollView } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";

type ScreenProps = {
  title: string;
  children: React.ReactNode;
};

export default function Screen({ title, children }: ScreenProps) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingTop: 50,
    },
    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: 20,
      alignItems: "center",
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    titleText: {
      fontFamily: "AbhayaLibre",
      marginTop: 10,
      marginBottom: 16,
      marginLeft: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <IconButton
          icon="chevron-left"
          size={50}
          iconColor={theme.colors.primary}
          onPress={() => {
            router.back();
          }}
        />
        <Text
          variant="headlineLarge"
          style={styles.titleText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
      <ScrollView style={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
}
