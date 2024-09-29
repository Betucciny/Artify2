import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import MasonryList from "reanimated-masonry-list";
import { Asset } from "expo-asset";

type PhotoGalleryProps = {
  photos: Asset[];
  onPress: (index: number) => void;
};

type PhotoProps = {
  item: Asset;
  i: number;
  onPress: (index: number) => void;
};

function Photo({ item, i, onPress }: PhotoProps) {
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    const fetchAspectRatio = async () => {
      try {
        if (!item.downloaded) throw new Error("Image not downloaded");
        const { width, height } = item;
        const aspectRatio = width && height ? width / height : 1;
        setAspectRatio(aspectRatio);
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
      <Image source={item.localUri} style={styles.image} />
    </TouchableOpacity>
  );
}

export default function PhotoGallery({ photos, onPress }: PhotoGalleryProps) {
  return (
    <MasonryList
      data={photos}
      keyExtractor={(item: any, index: number): string => index.toString()}
      numColumns={2}
      contentContainerStyle={{
        alignSelf: "stretch",
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }: { item: unknown; i: number }) => (
        <Photo item={item as Asset} i={i} onPress={onPress} />
      )}
    />
  );
}
