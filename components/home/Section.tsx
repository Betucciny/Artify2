import { IconButton, Surface, useTheme } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Href } from "expo-router";

type SectionProps = {
  images: string[];
  title: string;
  href: Href<string | object>;
};

export default function Section({ images, title, href }: SectionProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    surfaceContainer: {
      flexDirection: "column",
      borderRadius: 10,
      marginVertical: 10,
    },
    imagesContainer: {
      flexWrap: "wrap",
      alignContent: "space-between",
      justifyContent: "space-between",
      height: 180,
      gap: 5,
    },
    leftImage: {
      borderTopLeftRadius: 10,
      flexGrow: 1,
      height: "100%",
      width: "50%",
    },
    rightTopImage: {
      borderTopRightRadius: 10,
      flexGrow: 1,
      height: "48%",
      width: "50%",
    },
    rightImage: {
      flexGrow: 1,
      height: "48%",
      width: "50%",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20,
      marginTop: 15,
      marginBottom: 20,
      color: theme.colors.onSurface,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconButton: {
      marginRight: 20,
    },
  });

  return (
    <Surface elevation={1} style={styles.surfaceContainer}>
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={
              index === 0
                ? styles.leftImage
                : index === 1
                  ? styles.rightTopImage
                  : styles.rightImage
            }
          />
        ))}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <IconButton
          icon="plus"
          mode={"contained-tonal"}
          size={20}
          style={styles.iconButton}
          onPress={() => router.replace(href)}
        />
      </View>
    </Surface>
  );
}
