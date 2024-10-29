import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

import { useEffect, useState } from "react";
import {
  TensorflowModel,
  useTensorflowModel,
  Tensor,
} from "react-native-fast-tflite";

function tensorToString(tensor: Tensor): string {
  return `\n  - ${tensor.dataType} ${tensor.name}[${tensor.shape}]`;
}

function modelToString(model: TensorflowModel): string {
  return (
    `TFLite Model (${model.delegate}):\n` +
    `- Inputs: ${model.inputs.map(tensorToString).join("")}\n` +
    `- Outputs: ${model.outputs.map(tensorToString).join("")}`
  );
}

export default function useAI() {
  const model1 = useTensorflowModel(
    require("../assets/model/prediction.tflite"),
  );
  const model2 = useTensorflowModel(require("../assets/model/transfer.tflite"));
  const actualModels = [
    model1.state === "loaded" ? model1.model : null,
    model2.state === "loaded" ? model2.model : null,
  ];
  const [styleImage, setStyleImage] = useState<Asset | null>(null);
  const [contentImage, setContentImage] = useState<Asset | null>(null);
  const [resultImage, setResultImage] = useState<Asset | null>(null);

  useEffect(() => {
    if (actualModels[0] === null || actualModels[1] === null) return;
    console.log(`Model 1 loaded! Shape:\n${modelToString(actualModels[0])}]`);
    console.log(`Model 2 loaded! Shape:\n${modelToString(actualModels[1])}]`);
  }, [actualModels]);

  function createStyleImage() {
    // TODO
  }

  function openImagePickerAsync(imageType: "style" | "content") {
    // TODO
  }

  function openCameraAsync(imageType: "style" | "content") {
    // TODO
  }

  return {
    setStyleImage,
    setContentImage,
    styleImage,
    contentImage,
    resultImage,
    openImagePickerAsync,
    openCameraAsync,
    createStyleImage,
  };
}
