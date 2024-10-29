import { useState, useRef } from "react";
import { LoadedImageInfo, LoadedStyle } from "../contexts/ImagesProvider";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from "react-native";
import { useRouter } from "expo-router";

type CarruselArtProps = {
  data: LoadedStyle;
};

const windowWidth = Dimensions.get("window").width;

export default function CarruselArt({ data }: CarruselArtProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      width: windowWidth,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundImage: {
      resizeMode: "cover",
      height: "100%",
      width: windowWidth,
    },
    arrow: {
      position: "absolute",
      top: "50%",
      zIndex: 1,
      padding: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: 20,
    },
    leftArrow: {
      left: 10,
    },
    rightArrow: {
      right: 10,
    },
    arrowText: {
      color: "white",
      fontSize: 40,
    },
  });

  const handlePress = (index: number) => {
    const name_id = `${data.name}_${index}`;
    router.push({
      pathname: "/stylesShow/photo/[name_id]",
      params: { name_id: name_id },
    });
  };

  const handleNext = () => {
    if (currentIndex < data.images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: newIndex * windowWidth,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: newIndex * windowWidth,
        animated: true,
      });
    }
  };

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * windowWidth,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {data.images.map((item, index) => (
          <TouchableOpacity
            key={item.title}
            onPress={() => handlePress(index)}
            style={styles.imageContainer}
          >
            <Image source={item.src.localUri} style={styles.backgroundImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {currentIndex > 0 && (
        <TouchableOpacity
          style={[styles.arrow, styles.leftArrow]}
          onPress={handlePrev}
        >
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
      )}
      {currentIndex < data.images.length - 1 && (
        <TouchableOpacity
          style={[styles.arrow, styles.rightArrow]}
          onPress={handleNext}
        >
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
