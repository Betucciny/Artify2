import { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native-paper";
import Screen from "@/components/Screen";
import GalleryPreview from "react-native-gallery-preview";
import PhotoGallery from "@/components/images/PhotoGallery";
import { ImageURISource, View, StyleSheet } from "react-native";
import { Asset } from "expo-asset";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
import Spacer from "@/components/Spacer";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [imageAssets, setImageAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const handlePreview = (index: number) => {
    setIsVisible(true);
    setInitialIndex(index);
  };

  useEffect(() => {
    async function getImages() {
      const almbum = await MediaLibrary.getAlbumAsync("Artify");
      if (!almbum) {
        setLoading(false);
        return;
      }
      const pagedInfo = await MediaLibrary.getAssetsAsync({ album: almbum });
      const assets = pagedInfo.assets
        .map((asset) => Asset.fromURI(asset.uri))
        .reverse();
      try {
        await Promise.all(assets.map((asset) => asset.downloadAsync()));
      } catch (error) {
        console.log("Failed to download images:", error);
      }

      setImageAssets(assets);
      setLoading(false);
    }
    getImages();
  }, [isFocused, setImageAssets, setLoading]);

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
    <Screen title="Gallery">
      {imageAssets.length === 0 ? (
        <View style={styles.container}>
          <Text variant="displayMedium">Start generating Images</Text>
        </View>
      ) : !loading ? (
        <>
          <PhotoGallery photos={imageAssets} onPress={handlePreview} />
          <GalleryPreview
            images={
              imageAssets.map((asset) => {
                return { uri: asset.uri } as ImageURISource;
              }) as ImageURISource[]
            }
            isVisible={isVisible}
            onRequestClose={() => setIsVisible(false)}
            initialIndex={initialIndex}
            swipeToCloseEnabled
          />
        </>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      )}
      <Spacer margin={60} />
    </Screen>
  );
}
