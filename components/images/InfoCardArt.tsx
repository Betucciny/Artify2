import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import { Divider, useTheme, Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { LoadedImageInfo } from "../contexts/ImagesProvider";
import Spacer from "../Spacer";
import { ScrollView } from "react-native";
import InfoCard from "./InfoCard";
import { usePreferences } from "@/hooks/usePreferences";

type InfoCardArtProps = {
  data: LoadedImageInfo;
};

export default function InfoCardArt({ data }: InfoCardArtProps) {
  const { preferences } = usePreferences();
  const router = useRouter();
  const styles = StyleSheet.create({
    name: {
      textAlign: "center",
      marginBottom: 5,
    },
    text: {
      textAlign: "left",
    },
    contentContainer: {
      flex: 1,
      padding: 20,
    },
    textContainer: {
      alignItems: "stretch",
      paddingVertical: 10,
    },
  });

  return (
    <InfoCard>
      <ScrollView style={styles.contentContainer}>
        <Text variant="headlineLarge" style={styles.name}>
          {data.title}
        </Text>
        <View style={styles.textContainer}>
          <Text variant="titleMedium" style={styles.text}>
            Artist
          </Text>
          <Text style={styles.text}>{data.author}</Text>
        </View>
        <Divider />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.description}</Text>
        </View>
        <Spacer margin={20} />
      </ScrollView>
    </InfoCard>
  );
}
