import { Tensor, TensorflowModel } from "react-native-fast-tflite";
import * as jpeg from "jpeg-js";
import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { TypedArray } from "expo-modules-core";

export function tensorToString(tensor: Tensor): string {
  return `\n  - ${tensor.dataType} ${tensor.name}[${tensor.shape}]`;
}

export function modelToString(model: TensorflowModel): string {
  return (
    `TFLite Model (${model.delegate}):\n` +
    `- Inputs: ${model.inputs.map(tensorToString).join("")}\n` +
    `- Outputs: ${model.outputs.map(tensorToString).join("")}`
  );
}

export function resizeImage(
  data: Uint8Array,
  srcWidth: number,
  srcHeight: number,
  targetWidth: number,
  targetHeight: number,
): Uint8Array {
  // Determine the size of the square crop
  const cropSize = Math.min(srcWidth, srcHeight);
  const cropX = Math.floor((srcWidth - cropSize) / 2);
  const cropY = Math.floor((srcHeight - cropSize) / 2);

  // Create a new array for the cropped square image
  const croppedData = new Uint8Array(cropSize * cropSize * 4);

  // Copy the cropped square image data
  for (let y = 0; y < cropSize; y++) {
    for (let x = 0; x < cropSize; x++) {
      const srcIndex = ((cropY + y) * srcWidth + (cropX + x)) * 4;
      const cropIndex = (y * cropSize + x) * 4;

      croppedData[cropIndex] = data[srcIndex]; // R
      croppedData[cropIndex + 1] = data[srcIndex + 1]; // G
      croppedData[cropIndex + 2] = data[srcIndex + 2]; // B
      croppedData[cropIndex + 3] = data[srcIndex + 3]; // A
    }
  }

  // Create a new array for the resized image
  const resizedData = new Uint8Array(targetWidth * targetHeight * 4);
  const xRatio = cropSize / targetWidth;
  const yRatio = cropSize / targetHeight;

  // Resize the cropped square image to the target dimensions
  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      const srcX = Math.floor(x * xRatio);
      const srcY = Math.floor(y * yRatio);
      const srcIndex = (srcY * cropSize + srcX) * 4;
      const targetIndex = (y * targetWidth + x) * 4;

      resizedData[targetIndex] = croppedData[srcIndex]; // R
      resizedData[targetIndex + 1] = croppedData[srcIndex + 1]; // G
      resizedData[targetIndex + 2] = croppedData[srcIndex + 2]; // B
      resizedData[targetIndex + 3] = croppedData[srcIndex + 3]; // A
    }
  }

  return resizedData;
}

export async function assetToModelInput(
  asset: Asset,
  dimension: number,
): Promise<Float32Array | null> {
  if (!asset || !asset.uri) return null;
  const localUri = asset.uri;
  const base64Image = await FileSystem.readAsStringAsync(localUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const rawImageData = Buffer.from(base64Image, "base64");
  const { data, width, height } = jpeg.decode(rawImageData, {
    useTArray: true,
  });

  const resizedData = resizeImage(data, width, height, dimension, dimension);
  const float32Data = new Float32Array(dimension * dimension * 3);
  for (let i = 0, j = 0; i < resizedData.length; i += 4, j += 3) {
    float32Data[j] = resizedData[i] / 255.0; // R
    float32Data[j + 1] = resizedData[i + 1] / 255.0; // G
    float32Data[j + 2] = resizedData[i + 2] / 255.0; // B
  }
  return float32Data;
}

export async function modelOutputToAsset(
  modelOutput: Float32Array,
  dimension: number,
): Promise<Asset | null> {
  const width = dimension;
  const height = dimension;
  const data = new Uint8Array(dimension * dimension * 4);

  for (let i = 0, j = 0; i < modelOutput.length; i += 3, j += 4) {
    data[j] = modelOutput[i] * 255; // R
    data[j + 1] = modelOutput[i + 1] * 255; // G
    data[j + 2] = modelOutput[i + 2] * 255; // B
    data[j + 3] = 0; // A
  }

  const rawImageData = { data, width, height };
  const jpegImageData = jpeg.encode(rawImageData, 100);
  const imgBase64 = jpegImageData.data.toString("base64");
  const salt = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const uri = FileSystem.cacheDirectory + `artify-${salt}.jpg`;
  await FileSystem.writeAsStringAsync(uri, imgBase64, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const asset = Asset.fromURI(uri);
  await asset.downloadAsync();
  return asset;
}

export async function combinePrediction(
  style: Float32Array,
  content: Float32Array,
  percentage: number,
): Promise<Float32Array> {
  if (style.length !== content.length) {
    throw new Error("Style and content vectors must have the same length");
  }

  if (percentage < 0 || percentage > 1) {
    throw new Error("Percentage must be between 0 and 1");
  }

  const combined = new Float32Array(style.length);
  console.log("Percentage", percentage);
  for (let i = 0; i < style.length; i++) {
    combined[i] = style[i] * percentage + content[i] * (1 - percentage);
  }
  console.log("Combined prediction", combined);
  console.log("Style prediction", style);
  console.log("Content prediction", content);
  return combined;
}
