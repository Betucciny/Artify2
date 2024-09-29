import { useState, useEffect, useMemo } from "react";
import { useAssets, Asset } from "expo-asset";
import { data_styles, Style } from "@/constants/styles";
import { ImageSourcePropType } from "react-native";

type ImageInfo = {
  name: string;
  imageIndex?: number;
  imageSrc: ImageSourcePropType;
};

const getStylesWithRandomImage = (styles: Style[]): ImageInfo[] => {
  return styles.map((style) => {
    const randomImage =
      style.images[Math.floor(Math.random() * style.images.length)];
    return {
      name: style.name,
      imageSrc: randomImage.src,
    };
  });
};

const getRandomImages = (images: ImageInfo[], count: number): ImageInfo[] => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const useImageAssets = () => {
  const [allImagesDownloaded, setAllImagesDownloaded] = useState(false);

  const allImages: ImageInfo[] = data_styles.flatMap((style, styleIndex) =>
    style.images.map((image, imageIndex) => ({
      name: style.name,
      imageIndex,
      imageSrc: image.src,
    })),
  );

  const randomImages: ImageInfo[] = useMemo(
    () => getRandomImages(allImages, 20),
    [],
  );

  const [imageSources, error] = useAssets(
    randomImages.map((image) => image.imageSrc as number),
  );

  const stylesWithRandomImage = useMemo(
    () => getStylesWithRandomImage(data_styles),
    [],
  );
  const [styleImageSources, styleError] = useAssets(
    stylesWithRandomImage.map((style) => style.imageSrc as number),
  );

  useEffect(() => {
    function loadImages() {
      if (imageSources && styleImageSources) {
        const imagesDownloading = imageSources.map((image) =>
          image.downloadAsync(),
        );
        const styleImagesDownloading = styleImageSources.map((image) =>
          image.downloadAsync(),
        );
        Promise.all([...imagesDownloading, ...styleImagesDownloading]).then(
          () => {
            setAllImagesDownloaded(true);
          },
        );
      }
    }
    loadImages();
  }, [imageSources, styleImageSources]);

  return {
    allImagesDownloaded,
    imageSources,
    styleImageSources,
    randomImages,
    stylesWithRandomImage,
    error,
    styleError,
  };
};
