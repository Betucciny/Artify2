import { useContext } from "react";
import { PreferencesContext } from "@/components/contexts/PreferencesProvider";

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
};
