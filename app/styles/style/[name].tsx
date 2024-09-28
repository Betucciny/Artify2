import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Style() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Style</Text>
      {params.name && <Text>name: {params.name}</Text>}
    </View>
  );
}
