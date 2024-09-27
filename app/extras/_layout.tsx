import { Stack } from "expo-router";

export default function Extras() {
  return (
    <Stack>
      <Stack.Screen name="faq" options={{ headerShown: false }} />
      <Stack.Screen name="privacy_policy" options={{ headerShown: false }} />
      <Stack.Screen name="report_problem" options={{ headerShown: false }} />
      <Stack.Screen name="terms_of_use" options={{ headerShown: false }} />
    </Stack>
  );
}
