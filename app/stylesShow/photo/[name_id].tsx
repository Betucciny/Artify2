import { Stack, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { data_styles } from "@/constants/styles";
import { useAssets } from "expo-asset";
import InfoCard from "@/components/images/InfoCard";
import BackButton from "@/components/BackButton";

export default function Photo() {
  const { name_id } = useLocalSearchParams();
  const router = useRouter();
  if (!name_id && !name_id.includes("_") && typeof name_id !== "string") {
    router.navigate("/");
    return null;
  }
  const [name, id] = typeof name_id === "string" ? name_id.split("_") : [];
  const imageData = data_styles.find((style) => style.name === name)?.images[
    parseInt(id)
  ];
  if (!imageData) {
    router.navigate("/");
    return null;
  }
  const imageSource = imageData.src;

  const [loaded, setLoaded] = useState(false);
  const [imageAsset, error] = useAssets([imageSource as number]);

  useEffect(() => {
    if (imageAsset) {
      imageAsset[0].downloadAsync().then(() => {
        setLoaded(true);
      });
    }
  }, [imageAsset]);

  const backgroundAssetUri = imageAsset ? imageAsset[0].localUri : null;

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    backgroundImage: {
      resizeMode: "cover",
      height: "70%",
      width: "100%",
    },
  });

  return (
    <View style={styles.mainContainer}>
      <BackButton />
      <Stack.Screen options={{ headerShown: false }} />
      {loaded ? (
        <Image source={backgroundAssetUri} style={styles.backgroundImage} />
      ) : (
        <Text>Loading...</Text>
      )}
      <InfoCard data={imageData} stylePhoto={name_id as string} />
    </View>
  );
}
