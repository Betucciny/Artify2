import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import useDataAssets from "@/hooks/useDataAssets";
import BackButton from "@/components/BackButton";
import InfoCardStyle from "@/components/images/InfoCardStyle";
import CarruselArt from "@/components/images/CarruselArt";

export default function Style() {
  const { name } = useLocalSearchParams();
  const { dataStyles } = useDataAssets();

  const router = useRouter();

  if (!name || name === "" || typeof name !== "string" || !dataStyles) {
    router.back();
    return null;
  }

  const styleData = dataStyles.find((style) => style.name === name);

  if (!styleData) {
    router.back();
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    backgroundImage: {
      resizeMode: "cover",
      height: "100%",
      width: "100%",
    },
  });

  const assetsImages = styleData.images.map((image) => image.src);

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
    <View style={styles.container}>
      <BackButton />
      <Stack.Screen options={{ headerShown: false }} />
      <CarruselArt data={styleData} />
      <InfoCardStyle data={styleData} />
    </View>
  );
}
