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
import { LoadedImageInfo, LoadedStyle } from "../contexts/ImagesProvider";
import Spacer from "../Spacer";
import { ScrollView } from "react-native";
import InfoCard from "./InfoCard";
import { usePreferences } from "@/hooks/usePreferences";

type InfoCardStyleProps = {
  data: LoadedStyle;
};

export default function InfoCardStyle({ data }: InfoCardStyleProps) {
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
          {data.name}
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.description}</Text>
        </View>
      </ScrollView>
    </InfoCard>
  );
}
