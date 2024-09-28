import Screen from "@/components/Screen";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Faq() {

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      marginBottom: 10,
      padding: 16,
      elevation: 2,
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
      color: "#555",
    },
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is Artify?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ligula in velit maximus tincidunt in gravida augue. Suspendisse potenti. Aenean faucibus felis ut arcu interdum, eu vestibulum sapien porta. Aliquam ligula augue, viverra id tincidunt id, dictum eu lorem. Proin volutpat mi orci, sed blandit eros pellentesque nec." },
    { question: "How do I upload my art?", answer: "Aliquam porttitor egestas est, et semper ante dignissim non. In placerat gravida molestie. Fusce tortor libero, tempus vitae ipsum non, imperdiet porttitor risus. Maecenas in hendrerit massa." },
    { question: "How does Artify work?", answer: "Duis estibulum at euismod lacus, eget efficitur ligula. Maecenas in nibh non nibh interdum mollis. Ut dui justo, vestibulum non sagittis ac, aliquet in tortor. Mattis mollis elit molestie euismod. Donec eu vestibulum enim. Morbi sed sollicitudin eros. Aenean eget venenatis orci, non consequat massa." },
    { question: "How do I contact support?", answer: "estibulum at euismod lacus, eget efficitur ligula. Maecenas in nibh non nibh interdum mollis. Ut dui justo, vestibulum non sagittis ac, aliquet in tortor. " },
    { question: "Is Artify free?", answer: "Aliquam porttitor egestas est, et semper ante dignissim non. In placerat gravida molestie. Fusce tortor libero, tempus vitae ipsum non, imperdiet porttitor risus. Maecenas in hendrerit massa." },];


  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Screen title="FAQ">
      <View style={styles.container}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.toggle}>
                  {expandedIndex === index ? '-' : '+'}
                </Text>
              </View>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </View>
    </Screen>
  );
}
