import { ImageURISource } from "react-native";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

type ImagePreviewProps = {
  image: ImageURISource;
  onPress: () => void;
};

const { width } = Dimensions.get("window");

export default function ImagePreview({ image, onPress }: ImagePreviewProps) {
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
    container: {
      width: width,
      aspectRatio: 1,
    },
  });

  return (
    <TouchableOpacity onLongPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}
