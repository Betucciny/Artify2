import { Asset } from "expo-asset";
import { View, StyleSheet, Text } from "react-native";
import { useTheme, Button, Dialog, Portal } from "react-native-paper";
import { Image } from "expo-image";
import Screen from "../Screen";
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import { useState } from "react";

type ResultScreenProps = {
  result: Asset;
};

const height = Dimensions.get("window").height;

export default function ResultScreen({ result }: ResultScreenProps) {
  const router = useRouter();
  const [dialogVisible, setDialogVisible] = useState(false);

  const imageUri = result.localUri ? result.localUri : result.uri;

  async function saveImage() {
    try {
      const album = await MediaLibrary.getAlbumAsync("Artify");
      const asset = await MediaLibrary.createAssetAsync(imageUri);
      if (!album) {
        await MediaLibrary.createAlbumAsync("Artify", asset);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      }
      router.back();
    } catch (error) {
      console.log(error);
    }
  }

  function discardImage() {
    router.back();
  }

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  return (
    <Screen title="Result">
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.readyText}>Styled and ready to shine!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={saveImage}>
            Save
          </Button>
          <Button mode="contained" onPress={showDialog}>
            Discard
          </Button>
        </View>
        <Portal>
          <Dialog visible={dialogVisible} onDismiss={hideDialog}>
            <Dialog.Title>Confirm Discard</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to discard this image?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button
                onPress={() => {
                  hideDialog();
                  discardImage();
                }}
              >
                Yes
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
  messageContainer: {
    marginVertical: 10,
  },
  readyText: {
    fontSize: 16,
    margin: 10,
    color: "gray",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
