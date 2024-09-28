import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Screen from "@/components/Screen";
import { useTheme, Text, Surface } from "react-native-paper";
import Spacer from "@/components/Spacer";

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

  const content = [
    {
      subheading: "Introduction",
      paragraph:
        "Welcome to our app! This privacy policy outlines how we handle your personal data when using our image transformation app powered by AI. By using this app, you agree to the collection and use of information in accordance with this policy.",
    },
    {
      subheading: "Information Collection",
      paragraph:
        "We collect different types of information for various purposes to provide and improve our service. This may include, but is not limited to:",
      listItems: [
        "• Personal information (e.g., name, email address).",
        "• Images you upload for style conversion.",
        "• App usage data (e.g., interactions, preferences).",
      ],
    },
    {
      subheading: "Use of Information",
      paragraph: "We use the collected information for purposes such as:",
      listItems: [
        "• Transforming images using AI algorithms.",
        "• Improving app features and user experience.",
        "• Communicating updates and promotional content (if opted in).",
      ],
    },
    {
      subheading: "Security of Data",
      paragraph:
        "We prioritize the security of your data. All uploaded images are encrypted during transmission, and we ensure compliance with industry standards to protect your privacy.",
    },
    {
      subheading: "Data Retention",
      paragraph:
        "Uploaded images are stored temporarily and deleted after processing is complete, unless explicitly saved by the user.",
    },
    {
      subheading: "Your Rights",
      paragraph:
        "You have the right to request access to, correction of, or deletion of your personal data at any time.",
    },
    {
      subheading: "Contact Us",
      paragraph:
        "If you have any questions about this Privacy Policy, please contact us at support@yourapp.com.",
    },
  ];

  return (
    <Screen title="Privacy Policy">
      {content.map((section, index) => (
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
