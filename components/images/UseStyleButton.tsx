import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";

type UseStyleButtonProps = {
  onPress: () => void;
  text: string;
};

export default function UseStyleButton({ text, onPress }: UseStyleButtonProps) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      right: 0,
      padding: 10,
      backgroundColor: colors.primaryContainer,
      borderRadius: 10,
      zIndex: 1,
      marginTop: 50,
      marginEnd: 10,
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    text: {
      color: colors.onPrimaryContainer,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon source="brush" size={30} color={colors.onPrimaryContainer} />
      <Text variant="labelLarge" style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
