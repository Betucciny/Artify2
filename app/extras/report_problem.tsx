import Screen from "@/components/Screen";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useTheme, Text, TextInput, Button } from "react-native-paper";
import React from "react";

export default function ReportProblem() {
  const theme = useTheme();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [details, setDetails] = React.useState("");

  function handlePress() {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Details:", details);
  }

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
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
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
          value={details}
          onChangeText={setDetails}
        />
        <Button mode="contained" onPress={handlePress}>
          Submit
        </Button>
      </View>
    </Screen>
  );
}
