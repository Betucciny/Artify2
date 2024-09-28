import React, { useState, ReactNode } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "@/components/Screen";
import { useTheme, Text, Surface } from "react-native-paper";
import Spacer from "@/components/Spacer";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: "left",
    },
    accordionItem: {
      marginBottom: 10,
      borderRadius: 8,
      padding: 15,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 15,
      marginHorizontal: 15,
    },
  });

  return (
    <Surface style={[styles.accordionItem]}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={[styles.subTitle, { color: colors.onSurface }]}>
          {title}
        </Text>
        {expanded && (
          <Text style={[styles.paragraph, { color: colors.onSurface }]}>
            {children}
          </Text>
        )}
      </TouchableOpacity>
    </Surface>
  );
};

export default function TermsOfUse() {
  const styles = StyleSheet.create({
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 15,
      marginHorizontal: 15,
    },
  });

  const content = [
    {
      title: "1. Use of the Service",
      children:
        "Our application allows users to upload images and apply artistic filters using Artificial Intelligence (AI). The available styles include Baroque, Renaissance, and other artistic movements. The use of this service is strictly for personal and non-commercial purposes.",
    },
    {
      title: "2. User-Generated Content",
      children:
        "By uploading an image, you confirm that you own the rights to the image or have obtained permission from the rightful owner. The application does not claim ownership of the processed images, but we reserve the right to store and use the images to improve our AI model.",
    },
    {
      title: "3. Privacy and Data Collection",
      children:
        "Our application processes your images on secure servers using advanced AI algorithms. We prioritize user privacy and do not share personal data with third parties. However, anonymized data may be used for training and ongoing improvement of the AI models.",
    },
    {
      title: "4. Copyright of AI-Generated Works",
      children:
        "The transformed images created by our AI may incorporate artistic styles that are in the public domain (such as Baroque or Renaissance). However, the final output is considered user-generated content, and copyright remains with the user, subject to any third-party rights over the original uploaded image.",
    },
    {
      title: "5. Service Limitations",
      children:
        "The AI algorithms of the application aim to provide accurate artistic transformations. However, we cannot guarantee perfection in style accuracy or image quality. Results may vary depending on the input image and processing capabilities at the time of use.",
    },
    {
      title: "6. Modifications to the Terms",
      children:
        "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Continued use of the application after any changes constitutes your consent to those changes.",
    },
    {
      title: "7. Contact Us",
      children:
        "If you have any questions about these Terms of Use, please contact us at support@aiartapp.com",
    },
  ];

  return (
    <Screen title="Terms of Use">
      <Text style={[styles.paragraph]}>
        Welcome to our AI-powered image transformation application. By using
        this service, you agree to comply with the following terms and
        conditions. Please read them carefully to understand your rights and
        obligations.
      </Text>

      {content.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
      <Spacer margin={20} />
    </Screen>
  );
}
