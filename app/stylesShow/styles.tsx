import { useRouter, Stack } from "expo-router";
import { useImageAssets } from "@/hooks/useImageAssets";
import { StyleSheet, View } from "react-native";
import Screen from "@/components/Screen";
import CarruselStyles from "@/components/images/CarruselStyles";
import { useTheme } from "react-native-paper";
import BackButton from "@/components/BackButton";

export default function Styles() {
  const router = useRouter();
  const { colors } = useTheme();
  const { randomImages, stylesWithRandomImage } = useImageAssets();

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
      backgroundColor: colors.background,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <CarruselStyles
          images={stylesWithRandomImage.map((style) => style.imageAsset)}
          names={stylesWithRandomImage.map((style) => style.name)}
          onPress={handlePressStyle}
          orientation="vertical"
          widthScale={0.8}
        />
      </View>
      <BackButton />
    </>
  );
}
