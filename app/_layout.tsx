import { DarkTheme, LightTheme } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, Context } from "react";
import { PaperProvider } from "react-native-paper";
import { PreferencesProvider } from "@/components/contexts/PreferencesProvider";
import { usePreferences } from "@/hooks/usePreferences";

export default function Root() {
  const systemColorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PreferencesProvider>
      <AppContent systemColorScheme={systemColorScheme} />
    </PreferencesProvider>
  );
}

const AppContent = ({
  systemColorScheme,
}: {
  systemColorScheme: "light" | "dark" | undefined | null;
}) => {
  const { preferences } = usePreferences();

  const colorScheme =
    preferences.colorScheme === "system"
      ? systemColorScheme
      : preferences.colorScheme;

  return (
    <PaperProvider theme={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="extras" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
};
