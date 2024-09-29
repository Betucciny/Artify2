import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Screen from "@/components/Screen";
import { useTheme, Text, Surface } from "react-native-paper";
import Spacer from "@/components/Spacer";
import { privacy_content } from "@/constants/extras";

const PrivacyPolicy = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    scrollContainer: {
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    surfaceContainer: {
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    heading: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    subheading: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 10,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10,
    },
    listItem: {
      fontSize: 16,
      marginBottom: 8,
      marginLeft: 20,
    },
    footerContainer: {
      borderRadius: 10,
      padding: 20,
      marginTop: 30,
    },
  });

  return (
    <Screen title="Privacy Policy">
      {privacy_content.map((section, index) => (
        <Surface key={index} style={styles.surfaceContainer}>
          {section.subheading && (
            <Text style={styles.subheading}>{section.subheading}</Text>
          )}
          {section.paragraph && (
            <Text style={styles.paragraph}>{section.paragraph}</Text>
          )}
          {section.listItems &&
            section.listItems.map((item, idx) => (
              <Text key={idx} style={styles.listItem}>
                {item}
              </Text>
            ))}
        </Surface>
      ))}
      <Surface style={styles.footerContainer}>
        <Text style={styles.paragraph}>Last updated: January 1, 2022</Text>
      </Surface>
      <Spacer margin={20} />
    </Screen>
  );
};

export default PrivacyPolicy;
