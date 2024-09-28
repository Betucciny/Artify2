import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Photo() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Photo</Text>
      <Text>{params.name_id}</Text>
    </View>
  );
}
