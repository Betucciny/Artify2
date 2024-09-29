import Screen from "@/components/Screen";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Surface, Text, useTheme } from "react-native-paper";
import { faqs } from "@/constants/extras";

export default function Faq() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      borderRadius: 8,
      marginBottom: 10,
      padding: 16,
    },
    questionContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    question: {
      fontSize: 16,
      fontWeight: "bold",
    },
    toggle: {
      fontSize: 20,
      marginLeft: 10,
    },
    answer: {
      marginTop: 10,
      fontSize: 14,
      color: colors.onSurface,
    },
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Screen title="FAQ">
      <View style={styles.container}>
        {faqs.map((faq, index) => (
          <Surface key={index} style={styles.card}>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.toggle}>
                  {expandedIndex === index ? "-" : "+"}
                </Text>
              </View>
              {expandedIndex === index && (
                <Text style={styles.answer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          </Surface>
        ))}
      </View>
    </Screen>
  );
}
