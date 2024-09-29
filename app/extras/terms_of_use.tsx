import React, { useState, ReactNode } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "@/components/Screen";
import { useTheme, Text, Surface } from "react-native-paper";
import Spacer from "@/components/Spacer";
import { terms_content } from "@/constants/extras";

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

  return (
    <Screen title="Terms of Use">
      <Text style={[styles.paragraph]}>
        Welcome to our AI-powered image transformation application. By using
        this service, you agree to comply with the following terms and
        conditions. Please read them carefully to understand your rights and
        obligations.
      </Text>

      {terms_content.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
      <Spacer margin={20} />
    </Screen>
  );
}
