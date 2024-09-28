import Screen from "@/components/Screen";
import { Text, TextInput, Button, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

export default function ReportProblem() {

  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
      color: theme.colors.onSurface,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.outline,
      padding: 16,
      marginBottom: 16,
      borderRadius: 4,
      color: theme.colors.onSurface,
    },
    description: {
      fontSize: 14,
      marginBottom: 16,
      color: theme.colors.onSurface,
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 50,
      width: Dimensions.get("window").width / 2,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    submitButtonText: {
      color: theme.colors.onPrimary,
      fontSize: 18,
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
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
          placeholderTextColor={theme.colors.onSurfaceVariant}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          placeholderTextColor={theme.colors.onSurfaceVariant}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={theme.colors.onSurfaceVariant}
        />

        <Text style={styles.label}>Details</Text>
        <Text style={styles.description}>
          Please provide a detailed description of the issue. Try to be very specific.
        </Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Enter the problem details"
          placeholderTextColor={theme.colors.onSurfaceVariant}
          multiline
        />

        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </View>
      </View>
    </Screen>
  );
}
