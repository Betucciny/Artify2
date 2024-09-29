import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import Screen from "@/components/Screen";
import { useRouter } from "expo-router";
import { data_styles } from "@/constants/styles";
import { useAssets } from "expo-asset";
import { useEffect } from "react";
import PhotoGallery from "@/components/images/PhotoGallery";

export default function Style() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  if (!name || name === "" || typeof name !== "string") {
    router.back();
    return null;
  }

  const styleData = data_styles.find((style) => style.name === name);

  if (!styleData) {
    router.back();
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    surface: {
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  const [assetsImages, error] = useAssets(
    styleData.images.map((image) => image.src as number),
  );

  function handlePressPhoto(index: number) {
    const params = {
      name_id: `${name}_${index}`,
    };
    router.push({
      pathname: "/stylesShow/photo/[name_id]",
      params,
    });
  }

  return (
    <Screen title={name}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Surface style={styles.surface}>
          <Text variant="titleLarge" style={styles.title}>
            Description:
          </Text>
          <Text variant="bodyMedium">{styleData.description}</Text>
        </Surface>
        {assetsImages && (
          <PhotoGallery photos={assetsImages} onPress={handlePressPhoto} />
        )}
      </View>
    </Screen>
  );
}
