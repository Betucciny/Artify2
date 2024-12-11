import { useCameraPermissions } from "expo-camera";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";
import { Platform, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Preferences = {
  permissions: {
    camera: MediaLibrary.EXPermissionResponse | null;
    gallery: MediaLibrary.PermissionResponse | null;
  };
  colorScheme: "system" | "light" | "dark";
  isCreateOnTheStack: boolean;
};

type PreferencesContextType = {
  preferences: Preferences;
  setPermissions: (permissions: Preferences["permissions"]) => void;
  setColorScheme: (colorScheme: Preferences["colorScheme"]) => void;
  askCameraPermission: () => void;
  askMediaPermission: () => void;
  openAppSettings: () => void;
  setIsCreateOnTheStack: (isCreateOnTheStack: boolean) => void;
};

export const PreferencesContext = createContext<
  PreferencesContextType | undefined
>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();

  const [preferences, setPreferences] = useState<Preferences>({
    permissions: {
      camera: cameraPermission,
      gallery: mediaPermission,
    },
    colorScheme: "system",
    isCreateOnTheStack: false,
  });

  function openAppSettings() {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  }

  const getColorSchemeMemory = async () => {
    AsyncStorage.getItem("colorScheme").then((value) => {
      if (value) {
        setColorScheme(value as Preferences["colorScheme"]);
      } else {
        AsyncStorage.setItem("colorScheme", "system");
      }
    });
  };

  useEffect(() => {
    setPermissions({
      camera: cameraPermission,
      gallery: mediaPermission,
    });
    getColorSchemeMemory();
  }, [cameraPermission, mediaPermission]);

  const askCameraPermission = async () => {
    if (preferences.permissions.camera?.status === "granted") {
      return;
    }
    if (preferences.permissions.camera?.canAskAgain === false) {
      Alert.alert(
        "You need to enable camera permissions in your settings.",
        "",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Open Settings",
            onPress: openAppSettings,
          },
        ],
      );
      return;
    }
    await requestCameraPermission();
  };

  const askMediaPermission = async () => {
    if (preferences.permissions.gallery?.status === "granted") {
      return;
    }
    if (preferences.permissions.gallery?.canAskAgain === false) {
      Alert.alert(
        "You need to enable media permissions in your settings.",
        "",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Open Settings",
            onPress: openAppSettings,
          },
        ],
      );
      return;
    }
    await requestMediaPermission();
  };

  const setPermissions = (permissions: Preferences["permissions"]) => {
    setPreferences((prev) => ({
      ...prev,
      permissions,
    }));
  };

  const setColorScheme = (colorScheme: Preferences["colorScheme"]) => {
    setPreferences((prev) => ({
      ...prev,
      colorScheme,
    }));
    AsyncStorage.setItem("colorScheme", colorScheme);
  };

  const setIsCreateOnTheStack = (isCreateOnTheStack: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      isCreateOnTheStack,
    }));
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setPermissions,
        setColorScheme,
        askCameraPermission,
        askMediaPermission,
        openAppSettings,
        setIsCreateOnTheStack,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
