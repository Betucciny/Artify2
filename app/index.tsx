import { router } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  ActivityIndicator,
  useTheme,
  Text,
  Icon,
  Surface,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import useDataAssets from "@/hooks/useDataAssets";
import { cardData } from "@/constants/extras";

const { width } = Dimensions.get("window");

export default function App() {
  const theme = useTheme();
  const { loading } = useDataAssets();
  const styles = StyleSheet.create({
    container_global: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    sub_container: {
      justifyContent: "space-around",
      alignItems: "center",
      gap: 20,
    },
    title_text: {
      color: theme.colors.onPrimaryContainer,
    },
    description_text: {
      color: theme.colors.onBackground,
    },
    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 20,
      gap: 10,
      padding: 10,
      paddingHorizontal: 20,
      backgroundColor: theme.colors.primaryContainer,
    },
    image: {
      width: width * 0.9,
      resizeMode: "contain",
    },
    icon_container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    icon: {
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 10,
      padding: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const controlOnPress = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container_global}>
      <View style={styles.sub_container}>
        <Image
          source={
            theme.dark
              ? require("../assets/images/logo2.png")
              : require("../assets/images/logo1.png")
          }
          style={styles.image}
        />
        <Text variant="labelLarge" style={styles.description_text}>
          Apply Artistic Styles
        </Text>
        <View style={styles.icon_container}>
          {cardData.map((card) => (
            <Surface key={card.title} style={styles.icon}>
              <Ionicons
                name={card.icon}
                size={40}
                color={theme.colors.onPrimaryContainer}
              />
            </Surface>
          ))}
        </View>
      </View>
      <View style={styles.sub_container}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <TouchableOpacity onPress={controlOnPress} style={styles.button}>
            <Icon
              source="play"
              size={50}
              color={theme.colors.onPrimaryContainer}
            />
            <Text variant="displaySmall" style={styles.title_text}>
              Start
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
