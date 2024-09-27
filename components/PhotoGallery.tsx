import {
  View,
  StyleSheet,
  ImageURISource,
  TouchableOpacity,
  Image,
} from "react-native";
import MasonryList from "reanimated-masonry-list";
import { ImageItemURI } from "react-native-gallery-preview/lib/typescript/types";
import { useState, useEffect } from "react";

type PhotoGalleryProps = {
  photos: ImageURISource[];
  onPress: (index: number) => void;
};

function Photo({
  item,
  i,
  onPress,
}: {
  item: ImageItemURI;
  i: number;
  onPress: (index: number) => void;
}) {
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    const fetchAspectRatio = async () => {
      try {
        const ratio = await new Promise<number>((resolve, reject) => {
          Image.getSize(
            item.uri ? item.uri : (item as string),
            (width, height) => resolve(width / height),
            reject,
          );
        });
        setAspectRatio(ratio);
      } catch (error) {
        console.error("Failed to fetch image aspect ratio:", error);
      }
    };

    fetchAspectRatio();
  }, [item]);

  const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      padding: 5,
    },
    image: {
      width: "100%",
      height: undefined,
      aspectRatio: aspectRatio,
      borderRadius: 8,
    },
  });
  return (
    <TouchableOpacity
      key={i}
      onPress={() => {
        onPress(i);
      }}
      style={styles.imageContainer}
    >
      <Image source={item as ImageItemURI} style={styles.image} />
    </TouchableOpacity>
  );
}

export default function PhotoGallery({ photos, onPress }: PhotoGalleryProps) {
  return (
    <MasonryList
      data={photos}
      keyExtractor={(item: ImageURISource, index: number): string =>
        index.toString()
      }
      numColumns={2}
      contentContainerStyle={{
        alignSelf: "stretch",
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }: { item: unknown; i: number }) => (
        <Photo item={item as ImageItemURI} i={i} onPress={onPress} />
      )}
    />
  );
}
