import Screen from "@/components/Screen";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useTheme, Text, TextInput, Button } from "react-native-paper";

export default function ReportProblem() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      marginBottom: 16,
    },
  });

  return (
    <Screen title="Report a Problem">
      <View style={styles.container}>
        <Text style={styles.description}>
          Please use this form to tell us about the issue you're experiencing.
        </Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="Enter your first name" />
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Enter your last name" />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Text style={styles.label}>Details</Text>
        <Text style={styles.description}>
          Please provide a detailed description of the issue. Try to be very
          specific.
        </Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter the problem details"
          dense
          multiline
        />
        <Button mode="contained">Submit</Button>
      </View>
    </Screen>
  );
}
