import { useState, useEffect } from "react";
import { Text } from "react-native-paper";
import Screen from "@/components/Screen";
import GalleryPreview from "react-native-gallery-preview";
import PhotoGallery from "@/components/images/PhotoGallery";
import { ImageURISource } from "react-native";
import { Asset } from "expo-asset";

const photos: string[] = [
  "https://rukminim2.flixcart.com/image/850/1000/jmp79u80/poster/b/6/x/medium-pop-art-cubism-poster-wall-art-poster-pgully-pgp1388-original-imaf9jfyt36zhnng.jpeg?q=20&crop=false",
  "https://rukminim2.flixcart.com/image/850/1000/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg?q=90&crop=false",
  "https://m.media-amazon.com/images/I/81DO2H9zhwL._AC_UF1000,1000_QL80_.jpg",
  "https://img.freepik.com/foto-gratis/ilustracion-estilo-artistico-digital-concienciacion-sobre-dia-salud-mental_23-2151813354.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727395200&semt=ais_hybrid",
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [allDownloaded, setAllDownloaded] = useState(false);

  const handlePreview = (index: number) => {
    setIsVisible(true);
    setInitialIndex(index);
  };

  const imageAssets = photos.map((uri) => Asset.fromURI(uri));

  useEffect(() => {
    function downloadAssets() {
      Promise.all(imageAssets.map((asset) => asset.downloadAsync())).then(() =>
        setAllDownloaded(true),
      );
    }
    downloadAssets();
  }, [imageAssets, allDownloaded]);

  return (
    <Screen title="Gallery">
      {imageAssets.length === 0 ? (
        <Text>No photos</Text>
      ) : imageAssets && allDownloaded ? (
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
        <Text>Loading...</Text>
      )}
    </Screen>
  );
}
