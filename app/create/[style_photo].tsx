import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Create() {
  const { style_photo } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text> {style_photo} </Text>
    </View>
  );
}
