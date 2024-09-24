import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { Dimensions } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const colorSurface = useThemeColor({}, "surface");
  const colorOnSurface = useThemeColor({}, "onSurface");
  const colorPrimary = useThemeColor({}, "primary");
  const colorOnPrimary = useThemeColor({}, "onPrimary");
  const colorPrimaryContainer = useThemeColor({}, "primaryContainer");
  const colorOnPrimaryContainer = useThemeColor({}, "onPrimaryContainer");
  const colorShadow = useThemeColor({}, "shadow");
  const colorOutline = useThemeColor({}, "outline");

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colorSurface,
      // borderWidth: 1,
      borderColor: colorOutline,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      margin: 0,
      height: 80,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: colorShadow,
      shadowOffset: {
        width: 0,
        height: 15,
      },
      shadowOpacity: 0.85,
      shadowRadius: 30.0,
      elevation: 24,
    },
    tabButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
    icon: {
      width: 24,
      height: 24,
    },
    middleTabButton: {
      backgroundColor: colorPrimary,
      borderColor: colorOutline,
      borderWidth: 1,
      borderRadius: 50,
      width: 70,
      height: 70,
      position: "absolute",
      left: Dimensions.get("window").width / 2 - 40,
      bottom: 40,
      zIndex: 100,
    },
    leftMiddleTabButton: {
      marginRight: 30,
    },
    rightMiddleTabButton: {
      marginLeft: 30,
    },
  });

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const middleElement = ~~(state.routes.length / 2);
        const isMiddle = index === middleElement;
        const isLeftMiddle = index === middleElement - 1;
        const isRightMiddle = index === middleElement + 1;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabButton,
              isMiddle && styles.middleTabButton,
              isLeftMiddle && styles.leftMiddleTabButton,
              isRightMiddle && styles.rightMiddleTabButton,
            ]}
            key={route.key}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isMiddle
                  ? isFocused
                    ? colorOnPrimary
                    : colorOnPrimaryContainer
                  : isFocused
                    ? colorPrimary
                    : colorOnSurface,
                size: isMiddle ? 50 : 40,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
