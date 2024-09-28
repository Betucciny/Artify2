import Screen from "@/components/Screen";
import { StyleSheet, View, Text } from "react-native";
import { useRouter, Link } from "expo-router";
import { Button } from "react-native-paper";

export default function Create() {
  const router = useRouter();
  return (
    <Screen title="Styles">
      <Text>Créer une oeuvre</Text>
      <Link
        asChild
        push
        href={{
          pathname: "/styles/photo/[name_id]",
          params: { name_id: "Realism_0" },
        }}
      >
        <Button>Realism</Button>
      </Link>
      <Button
        onPress={() => {
          router.push({
            pathname: "/styles/photo/[name_id]",
            params: { name_id: "Impressionism_0" },
          });
        }}
      >
        Impressionism
      </Button>
      <Link
        push
        href={{ pathname: "/styles/style/[name]", params: { name: "Realism" } }}
      >
        Retour
      </Link>
    </Screen>
  );
}
