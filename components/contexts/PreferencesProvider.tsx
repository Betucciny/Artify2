import React, { createContext, useContext, useState, ReactNode } from "react";

export type Preferences = {
  permissions: {
    camera: boolean;
    gallery: boolean;
  };
  colorScheme: "system" | "light" | "dark";
};

type PreferencesContextType = {
  preferences: Preferences;
  setPermissions: (permissions: Preferences["permissions"]) => void;
  setColorScheme: (colorScheme: Preferences["colorScheme"]) => void;
};

export const PreferencesContext = createContext<
  PreferencesContextType | undefined
>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<Preferences>({
    permissions: {
      camera: false,
      gallery: false,
    },
    colorScheme: "system",
  });

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
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, setPermissions, setColorScheme }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
