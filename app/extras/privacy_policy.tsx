import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Screen from '@/components/Screen';

const PrivacyPolicy = () => {
  return (
    <Screen title="Privacy Policy">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to our app! This privacy policy outlines how we handle your personal data when using our image transformation app powered by AI. By using this app, you agree to the collection and use of information in accordance with this policy.
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Information Collection</Text>
          <Text style={styles.paragraph}>
            We collect different types of information for various purposes to provide and improve our service. This may include, but is not limited to:
          </Text>
          <Text style={styles.listItem}>• Personal information (e.g., name, email address).</Text>
          <Text style={styles.listItem}>• Images you upload for style conversion.</Text>
          <Text style={styles.listItem}>• App usage data (e.g., interactions, preferences).</Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Use of Information</Text>
          <Text style={styles.paragraph}>
            We use the collected information for purposes such as:
          </Text>
          <Text style={styles.listItem}>• Transforming images using AI algorithms.</Text>
          <Text style={styles.listItem}>• Improving app features and user experience.</Text>
          <Text style={styles.listItem}>• Communicating updates and promotional content (if opted in).</Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Security of Data</Text>
          <Text style={styles.paragraph}>
            We prioritize the security of your data. All uploaded images are encrypted during transmission, and we ensure compliance with industry standards to protect your privacy.
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Data Retention</Text>
          <Text style={styles.paragraph}>
            Uploaded images are stored temporarily and deleted after processing is complete, unless explicitly saved by the user.
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Your Rights</Text>
          <Text style={styles.paragraph}>
            You have the right to request access to, correction of, or deletion of your personal data at any time.
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.subheading}>Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions about this Privacy Policy, please contact us at support@yourapp.com.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Last updated: September 28, 2024</Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  boxContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    marginLeft: 20,
  },
  footerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  footer: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default PrivacyPolicy;
