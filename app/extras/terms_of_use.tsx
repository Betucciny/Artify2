import React, { useState, ReactNode } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "@/components/Screen"; 

interface AccordionItemProps {
  title: string;
  children: ReactNode; 
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.subTitle}>{title}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.paragraph}>{children}</Text>}
    </View>
  );
};

export default function TermsOfUse() {
  return (
    <Screen title="Terms of Use">
      <ScrollView>
        
        <Text style={styles.paragraph}>
          Welcome to our AI-powered image transformation application. By using this service, you agree to comply with the following terms and conditions. Please read them carefully to understand your rights and obligations.
        </Text>

        <AccordionItem title="1. Use of the Service">
          Our application allows users to upload images and apply artistic filters using Artificial Intelligence (AI). The available styles include Baroque, Renaissance, and other artistic movements. The use of this service is strictly for personal and non-commercial purposes.
        </AccordionItem>

        <AccordionItem title="2. User-Generated Content">
          By uploading an image, you confirm that you own the rights to the image or have obtained permission from the rightful owner. The application does not claim ownership of the processed images, but we reserve the right to store and use the images to improve our AI model.
        </AccordionItem>

        <AccordionItem title="3. Privacy and Data Collection">
          Our application processes your images on secure servers using advanced AI algorithms. We prioritize user privacy and do not share personal data with third parties. However, anonymized data may be used for training and ongoing improvement of the AI models.
        </AccordionItem>

        <AccordionItem title="4. Copyright of AI-Generated Works">
          The transformed images created by our AI may incorporate artistic styles that are in the public domain (such as Baroque or Renaissance). However, the final output is considered user-generated content, and copyright remains with the user, subject to any third-party rights over the original uploaded image.
        </AccordionItem>

        <AccordionItem title="5. Service Limitations">
          The AI algorithms of the application aim to provide accurate artistic transformations. However, we cannot guarantee perfection in style accuracy or image quality. Results may vary depending on the input image and processing capabilities at the time of use.
        </AccordionItem>

        <AccordionItem title="6. Modifications to the Terms">
          We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Continued use of the application after any changes constitutes your consent to those changes.
        </AccordionItem>

        <AccordionItem title="7. Contact Us">
          If you have any questions about these Terms of Use, please contact us at support@aiartapp.com.
        </AccordionItem>

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333", 
    textAlign: "left", 
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10, 
    color: "#555", 
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#666", 
    marginHorizontal: 15, 
  },
  accordionItem: {
    marginBottom: 10,
    backgroundColor: "#fff", 
    borderRadius: 8, 
    padding: 15, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, 
    borderWidth: 1, 
    borderColor: "#ddd", 
  },
});
