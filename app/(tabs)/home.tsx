import Screen from "@/components/Screen";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Surface, Text } from "react-native-paper";
import { CardProps, cardData } from "@/constants/extras";
import { useTheme } from "react-native-paper";

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

  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  last_description_text: {
    textAlign: "center",
    margin: 10,
    marginBottom: 150,
  },
});

function Card({ icon, title, description }: CardProps) {
  const { colors } = useTheme();
  return (
    <Surface style={styles.card}>
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
    </Surface>
  );
}

export default function Home() {
  return (
    <Screen title="Artify">
      <Text variant="titleLarge" style={styles.title_text}>
        Welcome to Artify!
      </Text>
      <Image
        source={require("../../assets/images/logo3.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text variant="bodyMedium" style={styles.description_text}>
        Artify is a creative platform where you can transform your photos with
        artistic filters powered by advanced AI. Discover new ways to express
        your creativity!
      </Text>

      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <View style={styles.textContainer}>
        <Text style={styles.last_description_text}>
          All done! Have fun exploring Artify!
        </Text>
      </View>
    </Screen>
  );
}
