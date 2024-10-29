import { useState, useMemo } from "react";
import { ImageSourcePropType } from "react-native";
import useDataAssets from "./useDataAssets";
import { LoadedStyle } from "@/components/contexts/ImagesProvider";
import { Asset } from "expo-asset";

type ImageInfo = {
  name: string;
  imageIndex?: number;
  imageAsset: Asset;
};

const getStylesWithRandomImage = (styles: LoadedStyle[]): ImageInfo[] => {
  return styles.map((style) => {
    const randomImage =
      style.images[Math.floor(Math.random() * style.images.length)];
    return {
      name: style.name,
      imageAsset: randomImage.src,
    };
  });
};

const getRandomImages = (images: ImageInfo[], count: number): ImageInfo[] => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const useImageAssets = () => {
  const { dataStyles, loading } = useDataAssets();
  const [allImagesDownloaded, setAllImagesDownloaded] = useState(false);
  const allImages: ImageInfo[] = dataStyles!.flatMap((style, styleIndex) =>
    style.images.map((image, imageIndex) => ({
      name: style.name,
      imageIndex,
      imageAsset: image.src,
    })),
  );

  const randomImages: ImageInfo[] = useMemo(
    () => getRandomImages(allImages, 20),
    [],
  );

  const stylesWithRandomImage = useMemo(
    () => getStylesWithRandomImage(dataStyles!),
    [],
  );

  return {
    dataStyles,
    randomImages,
    stylesWithRandomImage,
  };
};
