import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Surface, Text, Divider } from "react-native-paper";
import { Href, router } from "expo-router";

export type ItemProps = {
  title: string;
  href: Href<string | object>;
};

function Item({ title, href }: ItemProps) {
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => router.push(href)}
      >
        <Text variant="titleMedium">{title}</Text>
      </TouchableOpacity>
      <Divider />
    </>
  );
}

type SectionProps = {
  title: string;
  items: ItemProps[];
};

export default function Section({ title, items }: SectionProps) {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 20,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 10,
    },
    surface: {
      borderRadius: 10,
      paddingHorizontal: 30,
    },
  });
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        Device Permissions
      </Text>
      <Surface style={styles.surface}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Surface>
    </View>
  );
}
