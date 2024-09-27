import { View } from "react-native";

type SpacerProps = {
  margin: number;
};

export default function Spacer({ margin }: SpacerProps) {
  return <View style={{ margin }} />;
}
