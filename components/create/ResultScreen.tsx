import { Asset } from "expo-asset";
import { View, StyleSheet } from "react-native";
import { useTheme, Button } from "react-native-paper";
import { Image } from "expo-image";
import Screen from "../Screen";
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";

type ResultScreenProps = {
  result: Asset;
};

const height = Dimensions.get("window").height;

export default function ResultScreen({ result }: ResultScreenProps) {
  const router = useRouter();

  const imageUri = result.localUri ? result.localUri : result.uri;

  async function saveImage() {
    try {
      const almbum = await MediaLibrary.getAlbumAsync("Artify");
      const asset = await MediaLibrary.createAssetAsync(imageUri);
      if (!almbum) {
        await MediaLibrary.createAlbumAsync("Artify", asset);
      } else {
        const success = await MediaLibrary.addAssetsToAlbumAsync(
          [asset],
          almbum.id,
          false,
        );
        console.log(success);
      }
      router.back();
    } catch (error) {
      console.log(error);
    }
  }

  function discardImage() {
    router.back();
  }

  return (
    <Screen title="Result">
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={saveImage}>
            Save
          </Button>
          <Button mode="contained" onPress={discardImage}>
            Discard
          </Button>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  imageContainer: {
    width: "95%",
    borderRadius: 10,
    height: height * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "relative",
    top: 20,
    zIndex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
