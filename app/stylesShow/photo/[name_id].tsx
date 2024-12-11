import { Stack, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import BackButton from "@/components/BackButton";
import useDataAssets from "@/hooks/useDataAssets";
import { usePreferences } from "@/hooks/usePreferences";
import InfoCardArt from "@/components/images/InfoCardArt";
import UseStyleButton from "@/components/images/UseStyleButton";

export default function Photo() {
  const { name_id } = useLocalSearchParams();
  const { preferences } = usePreferences();
  const router = useRouter();
  if (!name_id && !name_id.includes("_") && typeof name_id !== "string") {
    router.navigate("/");
    return null;
  }
  const [name, id] = typeof name_id === "string" ? name_id.split("_") : [];
  const { dataStyles } = useDataAssets();
  const imageData = dataStyles?.find((style) => style.name === name)?.images[
    parseInt(id)
  ];
  if (!imageData) {
    router.navigate("/");
    return null;
  }

  const backgroundAssetUri = imageData.src.uri;

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    backgroundImage: {
      resizeMode: "cover",
      height: "100%",
      width: "100%",
    },
  });

  const handleOnPress = () => {
    if (preferences.isCreateOnTheStack) {
      router.back();
      router.back();
      router.back();

      setTimeout(() => {
        router.setParams({
          style_photo: name_id as string,
        });
      }, 100);
    } else {
      router.back();
      router.back();
      setTimeout(() => {
        router.setParams({
          style_photo: name_id as string,
        });
      }, 100);
      router.push({
        pathname: "/create/[style_photo]",
        params: {
          style_photo: name_id as string,
        },
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <BackButton />
      <UseStyleButton onPress={handleOnPress} text="Use as Style" />
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={backgroundAssetUri} style={styles.backgroundImage} />
      <InfoCardArt data={imageData} />
    </View>
  );
}
