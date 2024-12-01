import { View, StyleSheet, ScrollView, Image } from "react-native";
import { IconButton, Text, useTheme, Button } from "react-native-paper";
import { router } from "expo-router";

type ScreenProps = {
  title: string;
  button?: boolean;
  onPress?: () => void;
  active?: boolean;
  children: React.ReactNode;
};

export default function Screen({
  title,
  children,
  button = false,
  active = false,
  onPress,
}: ScreenProps) {
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
        <Image
          source={
            theme.dark
              ? require("../assets/images/logo4.png")
              : require("../assets/images/logo3.png")
          }
          style={{ width: 40, height: 40 }}
        />
        {button ? (
          <Button onPress={onPress} mode="contained" disabled={!active}>
            {title}
          </Button>
        ) : (
          <Text
            variant="headlineLarge"
            style={styles.titleText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        )}
      </View>
      <ScrollView style={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
}
