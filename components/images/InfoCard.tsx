import { StyleSheet, View, Dimensions } from "react-native";
import { Divider, useTheme, Button } from "react-native-paper";
import { Text } from "react-native-paper";
import { ImageInfo } from "@/constants/styles";
import { useRouter } from "expo-router";

const windowHeight = Dimensions.get("window").height;

type InfoCardProps = {
  data: ImageInfo;
  stylePhoto: string;
};

export default function InfoCard({ data, stylePhoto }: InfoCardProps) {
  const { colors } = useTheme();
  const router = useRouter();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: windowHeight * 0.4,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      justifyContent: "space-around",
    },
    titleContainer: {
      position: "relative",
      top: -25,
      width: 150,
      height: 50,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 15,
    },
    mainContainer: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "stretch",
      padding: 20,
    },
    title: {
      color: colors.onPrimary,
      textAlign: "center",
      marginBottom: 5,
    },
    name: {
      textAlign: "center",
      marginBottom: 5,
    },
    text: {
      textAlign: "left",
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "stretch",
      padding: 20,
      marginBottom: 20,
    },
    textContainer: {
      alignItems: "stretch",
      paddingVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="titleLarge" style={styles.title}>
          Info
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View>
          <Text variant="headlineLarge" style={styles.name}>
            {data.title}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text variant="titleMedium" style={styles.text}>
              Artist
            </Text>
            <Text style={styles.text}>{data.author}</Text>
          </View>
          <Divider />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{data.description}</Text>
          </View>
          <Button
            mode="elevated"
            onPress={() => {
              router.push({
                pathname: "/create/[style_photo]",
                params: { style_photo: stylePhoto },
              });
            }}
          >
            {" "}
            Create New Image
          </Button>
        </View>
      </View>
    </View>
  );
}
