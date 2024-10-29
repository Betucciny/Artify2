import { usePreferences } from "@/hooks/usePreferences";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Create() {
  const { style_photo } = useLocalSearchParams();
  const router = useRouter();

  const { setIsCreateOnTheStack } = usePreferences();

  useEffect(() => {
    setIsCreateOnTheStack(true);
    return () => setIsCreateOnTheStack(false);
  }, []);

  const stylePhoto = style_photo as string;
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text> {style_photo} </Text>
      <Button
        onPress={() => {
          router.navigate({
            pathname: "/stylesShow/style/[name]",
            params: { name: "Abstract" },
          });
        }}
      >
        Create
      </Button>
    </View>
  );
}
