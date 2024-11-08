import Screen from "@/components/Screen";
import { View, Text, StyleSheet, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  subtitle_text: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
  },
  description_text: {
    color: 'gray',
    fontSize: 10,
    textAlign: 'center',
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  last_description_text: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    marginBottom: 150,
  },
});

export default function Home() {
  return (
    <Screen title="Artify">
      <Text style={styles.title_text}>Welcome to Artify!</Text>
      <Image
          source={require('/Users/karinajoannaxochipamendoza/Documents/GitHub/Artify2/assets/images/logo3.png')}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
      <Text style={styles.description_text}>
        Artify is a creative platform where you can transform your photos with artistic filters powered by advanced AI. Discover new ways to express your creativity!
      </Text>

      <View style={styles.card}>
      <Ionicons name="color-palette" size={40} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle_text}>1. Select an Art Style</Text>
          <Text style={styles.description_text}>
            Browse our gallery of stunning art styles and pick one that inspires you.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
      <Ionicons name="cloud-upload" size={40} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle_text}>2. Upload Your Image</Text>
          <Text style={styles.description_text}>
            Choose a photo from your gallery or snap a new one to give it an artistic touch.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
      <Ionicons name="images" size={40} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle_text}>3. Save & View in Your Gallery</Text>
          <Text style={styles.description_text}>
            Save your masterpiece and revisit it anytime in your personal gallery.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
      <Ionicons name="settings" size={40} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle_text}>4. Adjust Your Settings</Text>
          <Text style={styles.description_text}>
            Personalize your Artify experience by tweaking your settings to suit your style.
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
          <Text style={styles.last_description_text}>All done! Have fun exploring Artify!</Text>
      </View>
    </Screen>
  );
}