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
};

export default function CarruselStyles({
  images,
  names,
  onPress,
}: CarruselStylesProps) {
  const renderItem = ({ title, item, index, onPress }: Item) => {
    return (
      <TouchableOpacity onPress={() => onPress(index)}>
        <Surface style={styles.itemContainer}>
          <Image source={item.localUri} style={styles.image} />
          <Text variant="headlineSmall" numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </Surface>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item, index }) =>
          renderItem({ title: names[index], item, index, onPress })
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: width * 0.45,
    height: 200,
    marginHorizontal: 10,
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
