import { Asset } from "expo-asset";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";
import { useTensorflowModel } from "react-native-fast-tflite";
import {
  assetToModelInput,
  combinePrediction,
  modelOutputToAsset,
} from "@/constants/functions";

export default function useAI() {
  const model1 = useTensorflowModel(
    require("../assets/model/prediction.tflite"),
  );
  const model2 = useTensorflowModel(
    require("../assets/model/prediction.tflite"),
  );
  const model3 = useTensorflowModel(require("../assets/model/transfer.tflite"));
  const actualModels = [
    model1.state === "loaded" ? model1.model : null,
    model2.state === "loaded" ? model2.model : null,
    model3.state === "loaded" ? model3.model : null,
  ];
  const [styleImage, setStyleImage] = useState<Asset | null>(null);
  const [contentImage, setContentImage] = useState<Asset | null>(null);
  const [resultImage, setResultImage] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(false);
  const [stylePercentage, setStylePercentage] = useState(100);

  useEffect(() => {
    if (
      actualModels[0] === null ||
      actualModels[1] === null ||
      actualModels[2] === null
    )
      return;
  }, [actualModels]);

  async function createStyleImage() {
    if (
      loading ||
      styleImage === null ||
      contentImage === null ||
      actualModels[0] === null ||
      actualModels[1] === null ||
      actualModels[2] === null
    ) {
      return;
    }
    setLoading(true);
    try {
      const dataStyle = await assetToModelInput(styleImage, 256);
      if (!dataStyle) return;

      let [stylePrediction] = actualModels[0].runSync([dataStyle]);
      if (!stylePrediction) return;

      const dataContent = await assetToModelInput(contentImage, 384);
      if (!dataContent) return;

      if (stylePercentage !== 100) {
        const dataContentPrediction = await assetToModelInput(
          contentImage,
          256,
        );
        if (!dataContentPrediction) return;
        const [contentPrediction] = actualModels[1].runSync([
          dataContentPrediction,
        ]);
        console.log("Content prediction created", contentPrediction);
        stylePrediction = await combinePrediction(
          stylePrediction as Float32Array,
          contentPrediction as Float32Array,
          stylePercentage / 100,
        );
      }
      console.log("Style prediction created", stylePrediction);
      const [resultTransfer] = actualModels[2].runSync([
        dataContent,
        stylePrediction,
      ]);
      if (!resultTransfer) return;

      const asset = await modelOutputToAsset(
        resultTransfer as Float32Array,
        384,
      );
      setResultImage(asset);
      console.log("Image created");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function openImagePickerAsync(imageType: "style" | "content") {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      selectionLimit: 1,
      quality: 1,
    });
    if (!result.canceled) {
      const asset = Asset.fromURI(result.assets[0].uri);
      await asset.downloadAsync();
      if (imageType === "style") {
        setStyleImage(asset);
      } else {
        setContentImage(asset);
      }
    }
  }

  async function openCameraAsync(imageType: "style" | "content") {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      selectionLimit: 1,
    });
    if (!result.canceled) {
      const asset = Asset.fromURI(result.assets[0].uri);
      await asset.downloadAsync();
      if (imageType === "style") {
        setStyleImage(asset);
      } else {
        setContentImage(asset);
      }
    }
  }

  return {
    loading,
    setLoading,
    setStyleImage,
    setContentImage,
    styleImage,
    contentImage,
    resultImage,
    openImagePickerAsync,
    openCameraAsync,
    createStyleImage,
    stylePercentage,
    setStylePercentage,
  };
}
