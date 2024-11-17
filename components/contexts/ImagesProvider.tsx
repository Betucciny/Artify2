import React, { createContext, useEffect, useState, ReactNode } from "react";
import { Asset } from "expo-asset";
import { data_styles } from "../../constants/styles";
import * as FileSystem from "expo-file-system";
import { images } from "@/constants/images";

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

  const writeImages = async () => {
    return Promise.all(
      images.map(async (image) => {
        const fileInfo = await FileSystem.getInfoAsync(image.path);
        if (!fileInfo.exists) {
          return FileSystem.writeAsStringAsync(image.path, image.base64, {
            encoding: FileSystem.EncodingType.Base64,
          });
        }
      }),
    );
  };

  const loadImages = () => {
    const loadedStyles: LoadedStyle[] = data_styles.map(
      (style): LoadedStyle => {
        const loadedImages: LoadedImageInfo[] = style.images.map((image) => {
          const asset = Asset.fromURI(image.src);
          return {
            src: asset,
            title: image.title,
            author: image.author,
            description: image.description,
          };
        });
        return {
          name: style.name,
          images: loadedImages,
          description: style.description,
        };
      },
    );
    setDataStyles(loadedStyles);
    setLoading(false);
  };

  const doAll = async () => {
    await writeImages();
    loadImages();
  };

  useEffect(() => {
    doAll();
  }, []);

  return (
    <AssetContext.Provider value={{ dataStyles, loading }}>
      {children}
    </AssetContext.Provider>
  );
};

export default ImageProvider;
