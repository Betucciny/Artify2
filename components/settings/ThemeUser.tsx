import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Surface,
  RadioButton,
  Switch,
  Text,
  useTheme,
  Divider,
} from "react-native-paper";
import { usePreferences } from "@/hooks/usePreferences";
import { Colors } from "@/constants/Colors";

type Theme = "light" | "dark" | "system";

export default function ThemeUser() {
  const { preferences, setColorScheme } = usePreferences();
  const [theme, setTheme] = useState<Theme>(preferences.colorScheme);

  useEffect(() => {
    setTheme(preferences.colorScheme);
  }, [preferences.colorScheme]);

  const handleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setColorScheme(newTheme);
  };

  const handleSwitch = (value: boolean) => {
    const newTheme = value ? "system" : theme === "system" ? "light" : theme;
    handleTheme(newTheme);
  };

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 20,
    },
    surface: {
      borderRadius: 10,
      paddingHorizontal: 30,
      flex: 1,
      justifyContent: "center",
      alignItems: "stretch",
    },
    containerThemes: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    containerColumnThemes: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    lightTheme: {
      height: 200,
      borderRadius: 20,
      width: 100,
      margin: 10,
      backgroundColor: Colors.light.primary,
    },
    darkTheme: {
      height: 200,
      borderRadius: 20,
      width: 100,
      margin: 10,
      backgroundColor: Colors.dark.primary,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        Appearance
      </Text>
      <Surface style={styles.surface}>
        <RadioButton.Group
          onValueChange={(newValue) => handleTheme(newValue as Theme)}
          value={theme}
        >
          <View style={styles.containerThemes}>
            <View style={styles.containerColumnThemes}>
              <View style={styles.lightTheme} />
              <Text variant="titleMedium">Light</Text>
              <RadioButton value="light" />
            </View>
            <View style={styles.containerColumnThemes}>
              <View style={styles.darkTheme} />
              <Text variant="titleMedium">Dark</Text>
              <RadioButton value="dark" />
            </View>
          </View>
        </RadioButton.Group>
        <Divider />
        <View style={styles.containerThemes}>
          <Text variant="titleMedium">Automatic</Text>
          <Switch value={theme === "system"} onValueChange={handleSwitch} />
        </View>
      </Surface>
    </View>
  );
}
