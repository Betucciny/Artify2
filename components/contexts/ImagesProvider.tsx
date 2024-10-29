import React, { createContext, useEffect, useState, ReactNode } from "react";
import { useAssets, Asset } from "expo-asset";
import { data_styles, Style } from "../../constants/styles";

// Define the shape of the assets object
export interface LoadedImageInfo {
  src: Asset;
  title: string;
  author: string;
  description: string;
}

export interface LoadedStyle {
  name: string;
  images: LoadedImageInfo[];
  description: string;
}

// Define the context type
interface AssetContextType {
  dataStyles: LoadedStyle[] | null;
  loading: boolean;
}

// Create a context with a default value
export const AssetContext = createContext<AssetContextType>({
  dataStyles: null,
  loading: true,
});

// Provider component
export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [dataStyles, setDataStyles] = useState<LoadedStyle[] | null>(null);
  const [loading, setLoading] = useState(true);

  const allImages = data_styles.flatMap((style) =>
    style.images.map((image) => image.src as number),
  );

  const [imageSources, error] = useAssets(allImages);

  useEffect(() => {
    const loadImages = async () => {
      if (imageSources) {
        const imagesDownloading = imageSources.map((image) =>
          image.downloadAsync(),
        );
        await Promise.all(imagesDownloading);

        const loadedStyles: LoadedStyle[] = data_styles.map(
          (style, styleIndex): LoadedStyle => {
            const loadedImages: LoadedImageInfo[] = style.images.map(
              (image, imageIndex) => {
                const asset =
                  imageSources[styleIndex * style.images.length + imageIndex];
                return {
                  src: asset!,
                  title: image.title,
                  author: image.author,
                  description: image.description,
                };
              },
            );
            return {
              name: style.name,
              images: loadedImages,
              description: style.description,
            };
          },
        );

        setDataStyles(loadedStyles);
        setLoading(false);
      }
    };

    loadImages();
  }, [imageSources]);

  return (
    <AssetContext.Provider value={{ dataStyles, loading }}>
      {children}
    </AssetContext.Provider>
  );
};

export default ImageProvider;
