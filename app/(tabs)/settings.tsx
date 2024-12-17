import { useEffect, useState } from "react";
import Screen from "@/components/Screen";
import Permissions from "@/components/settings/Permissions";
import Section, { ItemProps } from "@/components/settings/Section";
import ThemeUser from "@/components/settings/ThemeUser";
import Spacer from "@/components/Spacer";
import { usePreferences } from "@/hooks/usePreferences";
import { Alert } from "react-native";

const itemsAbout: ItemProps[] = [
  {
    title: "Privacy Policy",
    href: "/extras/privacy_policy",
  },
  {
    title: "Terms of Use",
    href: "/extras/terms_of_use",
  },
];

const itemsSupport: ItemProps[] = [
  // {
  //   title: "Report a Problem",
  //   href: "/extras/report_problem",
  // },
  {
    title: "FAQ",
    href: "/extras/faq",
  },
];

export default function Settings() {
  const {
    preferences,
    askCameraPermission,
    openAppSettings,
    askMediaPermission,
  } = usePreferences();

  async function handleCameraPermission(value: boolean) {
    if (value) {
      askCameraPermission();
    } else {
      Alert.alert(
        "Camera Permission",
        "You can disable camera permission in the app settings",
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
    }
  }

  async function handleGalleryPermission(value: boolean) {
    if (value) {
      askMediaPermission();
    } else {
      Alert.alert(
        "Gallery Permission",
        "You can disable gallery permission in the app settings",
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
    }
  }

  const permissions = [
    {
      icon: "camera",
      title: "Camera",
      status: !!preferences.permissions.camera?.granted,
      setIsSwitchOn: handleCameraPermission,
    },
    {
      icon: "file-image-outline",
      title: "Gallery",
      status: !!preferences.permissions.gallery?.granted,
      setIsSwitchOn: handleGalleryPermission,
    },
  ];

  return (
    <Screen title="Settings">
      <Permissions permissions={permissions} />
      <Section title="About" items={itemsAbout} />
      <Section title="Help" items={itemsSupport} />
      <ThemeUser />
      <Spacer margin={60} />
    </Screen>
  );
}
