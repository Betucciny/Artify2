import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
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
        <View style={styles.itemContainer}>
          <Image source={item.localUri} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
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
    width: width * 0.25,
    height: 100,
    marginHorizontal: 10,
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
  title: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "left",
  },
});
