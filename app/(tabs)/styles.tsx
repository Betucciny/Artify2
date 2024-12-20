import Screen from "@/components/Screen";
import { useRouter } from "expo-router";
import CarruselStyles from "@/components/images/CarruselStyles";
import PhotoGallery from "@/components/images/PhotoGallery";
import Spacer from "@/components/Spacer";
import { ActivityIndicator, Divider } from "react-native-paper";
import { Asset } from "expo-asset";
import { useImageAssets } from "@/hooks/useImageAssets";
import { StyleSheet, View } from "react-native";

export default function Styles() {
  const router = useRouter();
  const { dataStyles, randomImages, stylesWithRandomImage } = useImageAssets();

  function handlePressPhoto(index: number) {
    const selectedImage = randomImages[index];
    const params = {
      name_id: `${selectedImage.name}_${selectedImage.imageIndex}`,
    };
    router.push({
      pathname: "/stylesShow/photo/[name_id]",
      params,
    });
  }

  function handlePressStyle(index: number) {
    const selectedStyle = stylesWithRandomImage[index];
    const params = {
      name: selectedStyle.name,
    };
    router.push({
      pathname: "/stylesShow/style/[name]",
      params,
    });
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  });

  return (
    <Screen title="Styles">
      <CarruselStyles
        images={stylesWithRandomImage.map((style) => style.imageAsset)}
        names={stylesWithRandomImage.map((style) => style.name)}
        onPress={handlePressStyle}
      />
      <Spacer margin={10} />
      <Divider />
      <Spacer margin={10} />
      <PhotoGallery
        photos={randomImages.map((image) => image.imageAsset)}
        onPress={handlePressPhoto}
      />
      <Spacer margin={50} />
    </Screen>
  );
}
