import { Ionicons } from "@expo/vector-icons";

export const faqs = [
  {
    question: "What is Artify?",
    answer:
      "Artify is a platform that allows users to apply artistic filters to their images using advanced AI algorithms. With a range of styles inspired by art movements like Baroque and Renaissance, Artify provides a unique way to transform your photos into pieces of art.",
  },
  {
    question: "How do I upload my art?",
    answer:
      "To upload your art, simply navigate to the upload section in the app, select the image file you want to transform, and upload it. Our app will guide you through the next steps to apply your desired artistic style.",
  },
  {
    question: "How does Artify work?",
    answer:
      "Artify uses AI algorithms that analyze your uploaded images and apply artistic filters to replicate various art styles. This process happens on secure servers to ensure privacy and quality. Results are typically delivered in a few seconds, giving you a unique, stylized version of your image.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need assistance or want to report a problem, please visit our GitHub repository at www.github.com/betucciny/artify2 and open an issue.",
  },
  {
    question: "Is Artify free?",
    answer: "Yes! Artify is free.",
  },
];

export const privacy_content = [
  {
    subheading: "Introduction",
    paragraph:
      "Welcome to our app! This privacy statement outlines our commitment to user privacy. We do not collect any personal data from users when using our image transformation app powered by AI.",
  },
  {
    subheading: "Information Collection",
    paragraph:
      "We do not collect any personal information, images, or app usage data. Your privacy is our priority, and we ensure that no data is stored or shared.",
  },
  {
    subheading: "Use of Information",
    paragraph:
      "Since we do not collect any information, there is no data to use for any purposes. All image processing is done locally on your device.",
  },
  {
    subheading: "Security of Data",
    paragraph:
      "We prioritize the security of your data. Since no data is collected or transmitted, there are no security concerns related to data storage or transmission.",
  },
  {
    subheading: "Data Retention",
    paragraph:
      "As we do not collect any data, there is no data retention policy. All images processed are handled locally on your device and are not stored by us.",
  },
  {
    subheading: "Your Rights",
    paragraph:
      "Since we do not collect any personal data, there are no rights to request access to, correction of, or deletion of data.",
  },
  {
    subheading: "Contact Us",
    paragraph:
      "If you have any questions or concerns about this Privacy Policy, please visit our GitHub repository at www.github.com/betucciny/artify2 and open an issue.",
  },
];

export const terms_content = [
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

type IoniconsName = keyof typeof Ionicons.glyphMap;

export type CardProps = {
  icon: IoniconsName;
  title: string;
  description: string;
};

export const cardData: CardProps[] = [
  {
    icon: "color-palette",
    title: "1. Select an Art Style",
    description:
      "Browse our gallery of stunning art styles and pick one that inspires you.",
  },
  {
    icon: "cloud-upload",
    title: "2. Upload Your Image",
    description:
      "Choose a photo from your gallery or snap a new one to give it an artistic touch.",
  },
  {
    icon: "images",
    title: "3. Save & View in Your Gallery",
    description:
      "Save your masterpiece and revisit it anytime in your personal gallery.",
  },
  {
    icon: "settings",
    title: "4. Adjust Your Settings",
    description:
      "Personalize your Artify experience by tweaking your settings to suit your style.",
  },
];
