import { useState } from "react";
import Screen from "@/components/Screen";
import Permissions from "@/components/settings/Permissions";
import Section, { ItemProps } from "@/components/settings/Section";
import ThemeUser from "@/components/settings/ThemeUser";
import Spacer from "@/components/Spacer";

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
  {
    title: "Report a Problem",
    href: "/extras/report_problem",
  },
  {
    title: "FAQ",
    href: "/extras/faq",
  },
];

export default function Settings() {
  const [cameraStatus, setCameraStatus] = useState(false);
  const [galleryStatus, setGalleryStatus] = useState(false);
  const permissions = [
    {
      icon: "camera",
      title: "Camera",
      status: cameraStatus,
      setIsSwitchOn: setCameraStatus,
    },
    {
      icon: "file-image-outline",
      title: "Gallery",
      status: galleryStatus,
      setIsSwitchOn: setGalleryStatus,
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
