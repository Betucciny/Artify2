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
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: 10,
    },
    contentContainer: {
      flex: 1,
      padding: 20,
    },
    titleText: {
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
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text variant="headlineLarge" style={styles.titleText}>
          {title}
        </Text>
        {children}
      </ScrollView>
    </View>
  );
}
