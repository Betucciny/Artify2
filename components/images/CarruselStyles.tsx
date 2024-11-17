import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Surface, Text } from "react-native-paper";
import { Image } from "expo-image";
import { Asset } from "expo-asset";

const { width } = Dimensions.get("window");

type Item = {
  title: string;
  item: Asset;
  index: number;
  onPress: (index: number) => void;
};

type CarruselStylesProps = {
  images: Asset[];
  names: string[];
  onPress: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  widthScale?: number;
};

export default function CarruselStyles({
  images,
  names,
  onPress,
  orientation = "horizontal",
  widthScale = 0.45,
}: CarruselStylesProps) {
  const renderItem = ({ title, item, index, onPress }: Item) => {
    return (
      <TouchableOpacity onPress={() => onPress(index)}>
        <Surface style={styles.itemContainer}>
          <Image source={item.uri} style={styles.image} />
          <Text variant="headlineSmall" numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </Surface>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    itemContainer: {
      width: width * widthScale,
      height: 200,
      marginHorizontal: orientation === "horizontal" ? 10 : 0,
      marginVertical: orientation === "vertical" ? 10 : 0,
      padding: 10,
      borderRadius: 10,
      justifyContent: "center",
    },
    image: {
      width: "100%",
      elevation: 5,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      height: "80%",
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item, index }) =>
          renderItem({ title: names[index], item, index, onPress })
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal={orientation === "horizontal"}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
}
