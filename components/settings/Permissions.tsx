import React from "react";
import { Dispatch, SetStateAction } from "react";
import { View, StyleSheet } from "react-native";
import {
  Divider,
  Surface,
  Text,
  Switch,
  Icon,
  useTheme,
} from "react-native-paper";

type SingularPermissionProps = {
  icon: string;
  title: string;
  status: boolean;
  setIsSwitchOn: Dispatch<SetStateAction<boolean>>;
  divider?: boolean;
};

function SingularPermission({
  icon,
  title,
  status,
  setIsSwitchOn,
  divider,
}: SingularPermissionProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 5,
    },
    icon: {
      marginRight: 16,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Icon source={icon} size={30} color={theme.colors.primary} />
        <Text variant="titleMedium">{title}</Text>
        <Switch value={status} onValueChange={() => setIsSwitchOn(!status)} />
      </View>
      {divider && <Divider />}
    </>
  );
}

type PermissionsProps = {
  permissions: SingularPermissionProps[];
};

export default function Permissions({ permissions }: PermissionsProps) {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 20,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 10,
    },
    surface: {
      borderRadius: 10,
      paddingHorizontal: 30,
    },
  });
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        Device Permissions
      </Text>
      <Surface style={styles.surface}>
        {permissions.map((permission, index) => (
          <SingularPermission
            key={index}
            icon={permission.icon}
            title={permission.title}
            status={permission.status}
            setIsSwitchOn={(value) => {
              permission.setIsSwitchOn(value);
            }}
            divider={index !== permissions.length - 1}
          />
        ))}
      </Surface>
    </View>
  );
}
