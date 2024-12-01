import Screen from "@/components/Screen";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Surface, Text } from "react-native-paper";
import { CardProps, cardData } from "@/constants/extras";
import { useTheme } from "react-native-paper";
import Spacer from "@/components/Spacer";

const styles = StyleSheet.create({
  title_text: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  subtitle_text: {
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
  },
  description_text: {
    textAlign: "center",
    margin: 10,
  },
  surface: {
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  card: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  last_description_text: {
    textAlign: "center",
    margin: 10,
  },
});

function Card({ icon, title, description }: CardProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={40}
        style={styles.icon}
        color={colors.onSurface}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle_text}>{title}</Text>
        <Text style={styles.description_text}>{description}</Text>
      </View>
    </View>
  );
}

export default function Home() {
  const theme = useTheme();
  return (
    <Screen title="Artify">
      <Text variant="titleLarge" style={styles.title_text}>
        Welcome to Artify!
      </Text>
      <Image
        source={
          theme.dark
            ? require("../../assets/images/logo4.png")
            : require("../../assets/images/logo3.png")
        }
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text variant="bodyMedium" style={styles.description_text}>
        Artify is a creative platform where you can transform your photos with
        artistic filters powered by advanced AI. Discover new ways to express
        your creativity!
      </Text>

      <Surface style={styles.surface}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Surface>
      <View style={styles.textContainer}>
        <Text style={styles.last_description_text}>
          All done! Have fun exploring Artify!
        </Text>
      </View>
      <Spacer margin={60} />
    </Screen>
  );
}
