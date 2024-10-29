import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import jpeg from "jpeg-js";
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
  const model = useTensorflowModel(require("../assets/model/1.tflite"));
  const actualModel = model.state === "loaded" ? model.model : null;
  const [styleImage, setStyleImage] = useState<Asset | null>(null);
  const [contentImage, setContentImage] = useState<Asset | null>(null);
  const [resultImage, setResultImage] = useState<Asset | null>(null);

  useEffect(() => {
    if (actualModel == null) return;
    console.log(`Model loaded! Shape:\n${modelToString(actualModel)}]`);
  }, [actualModel]);

  function createStyleImage() {
    // TODO
  }

  return {
    setStyleImage,
    setContentImage,
    resultImage,
    createStyleImage,
  };
}
