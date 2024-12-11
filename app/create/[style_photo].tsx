import { usePreferences } from "@/hooks/usePreferences";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  FAB,
  Surface,
  useTheme,
  Portal,
  Modal,
  ActivityIndicator,
} from "react-native-paper";
import useAI from "@/hooks/useAI";
import Screen from "@/components/Screen";
import { Image } from "expo-image";
import useDataAssets from "@/hooks/useDataAssets";
import ResultScreen from "@/components/create/ResultScreen";
import Slider from "@react-native-community/slider";

export default function Create() {
  const { style_photo } = useLocalSearchParams();
  const router = useRouter();
  const { colors } = useTheme();
  const { setIsCreateOnTheStack } = usePreferences();
  const stylePhoto = style_photo as string;

  const {
    loading,
    setStyleImage,
    styleImage,
    contentImage,
    resultImage,
    openImagePickerAsync,
    openCameraAsync,
    createStyleImage,
    stylePercentage,
    setStylePercentage,
  } = useAI();

  const { dataStyles } = useDataAssets();

  const dataPhoto =
    stylePhoto === "undefined"
      ? [null, null]
      : stylePhoto === "personalized"
        ? ["personalized", "personalized"]
        : stylePhoto.split("_");

  useEffect(() => {
    const [name, id] = dataPhoto;
    if (name === "personalized") return;
    if (name && id && dataStyles) {
      const imageAsset = dataStyles?.find((style) => style.name === name)
        ?.images[parseInt(id)];
      if (imageAsset) {
        setStyleImage(imageAsset.src);
      }
    }
  }, [stylePhoto]);

  useEffect(() => {
    setIsCreateOnTheStack(true);
    return () => setIsCreateOnTheStack(false);
  }, []);

  if (resultImage) {
    return <ResultScreen result={resultImage} />;
  }

  return (
    <>
      <Portal>
        <Modal visible={loading} contentContainerStyle={styles.container}>
          <ActivityIndicator animating={true} size="large" />
        </Modal>
      </Portal>
      <Screen
        title="Create"
        button={true}
        onPress={createStyleImage}
        active={!loading}
      >
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.container}>
          <Surface style={styles.surfaceText}>
            <Text variant="titleMedium">Style</Text>
          </Surface>
          <View
            style={[styles.imageContainer, { backgroundColor: colors.surface }]}
          >
            {!!styleImage ? (
              <Image source={{ uri: styleImage?.uri }} style={styles.image} />
            ) : (
              <Text variant="labelMedium" style={{ color: colors.onSurface }}>
                Choose a style image
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <FAB
              icon="camera"
              onPress={() => {
                router.setParams({ style_photo: "personalized" });
                openCameraAsync("style");
              }}
            />
            <FAB
              icon="movie"
              onPress={() => {
                router.setParams({ style_photo: "personalized" });
                openImagePickerAsync("style");
              }}
            />
            <FAB
              icon="format-color-fill"
              onPress={() => {
                router.push("/stylesShow/styles");
              }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Surface style={styles.surfaceText}>
            <Text variant="titleMedium">Percentage</Text>
          </Surface>
          <View
            style={[
              styles.sliderContainer,
              { backgroundColor: colors.surface },
            ]}
          >
            <Slider
              style={{ width: "90%", marginTop: 20 }}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.onSurface}
              thumbTintColor={colors.primary}
              value={stylePercentage}
              onValueChange={(value) => {
                setStylePercentage(value);
              }}
            />
            <Text variant="labelMedium" style={{ color: colors.onSurface }}>
              {stylePercentage | 0}%
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Surface style={styles.surfaceText}>
            <Text variant="titleMedium">Content</Text>
          </Surface>
          <View
            style={[styles.imageContainer, { backgroundColor: colors.surface }]}
          >
            {!!contentImage ? (
              <Image source={{ uri: contentImage?.uri }} style={styles.image} />
            ) : (
              <Text variant="labelMedium" style={{ color: colors.onSurface }}>
                Choose a content image
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <FAB
              icon="camera"
              onPress={() => {
                openCameraAsync("content");
              }}
            />
            <FAB
              icon="movie"
              onPress={() => {
                openImagePickerAsync("content");
              }}
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  surfaceText: {
    padding: 8,
    position: "relative",
    top: 20,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "relative",
    bottom: 20,
  },
  imageContainer: {
    width: "90%",
    zIndex: -1,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  continueButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  sliderContainer: {
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
