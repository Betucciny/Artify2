import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import { useTheme, Button, Text } from "react-native-paper";
import Spacer from "../Spacer";

const windowHeight = Dimensions.get("window").height;

type InfoCardProps = {
  onPress?: () => void;
  buttonTitle?: string;
  children: React.ReactNode;
};

export default function InfoCard({
  children,
  onPress,
  buttonTitle,
}: InfoCardProps) {
  const { colors } = useTheme();
  const [height, setHeight] = useState(windowHeight * 0.5);
  const maxHeight = windowHeight * 0.5;
  const initialTranslateY = height * 0.5 -50;
  const finalTranslateY = height * 0;
  const translateY = useRef(new Animated.Value(initialTranslateY)).current; // Start with the card partially hidden

  const collapsedScale = 0.9; // Scale when the card is collapsed
  const expandedScale = 1.0; // Scale when the card is expanded

  const scale = translateY.interpolate({
    inputRange: [finalTranslateY, initialTranslateY],
    outputRange: [expandedScale, collapsedScale],
    extrapolate: "clamp",
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        const newTranslateY = initialTranslateY + gestureState.dy;
        if (newTranslateY >= finalTranslateY) {
          translateY.setValue(newTranslateY);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.spring(translateY, {
            toValue: initialTranslateY,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateY, {
            toValue: finalTranslateY,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      maxHeight: maxHeight,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      justifyContent: "space-around",
      transform: [{ translateY }, { scale }],
    },
    titleContainer: {
      position: "relative",
      top: -25,
      width: 150,
      height: 50,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 15,
    },
    title: {
      color: colors.onPrimary,
      textAlign: "center",
      marginBottom: 5,
    },
  });

  return (
    <Animated.View
      style={styles.container}
      {...panResponder.panHandlers}
      onLayout={(event) =>
        setHeight(Math.max(event.nativeEvent.layout.height, maxHeight))
      }
    >
      <View style={styles.titleContainer}>
        <Text variant="titleLarge" style={styles.title}>
          Info
        </Text>
      </View>
      {!!onPress && !!buttonTitle && (
        <Button mode="elevated" onPress={onPress}>
          {buttonTitle}
        </Button>
      )}
      {children}
    </Animated.View>
  );
}
