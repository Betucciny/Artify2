import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { Dimensions } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { useTheme } from "react-native-paper";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: theme.colors.background,
      // borderWidth: 1,
      borderColor: theme.colors.outline,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      margin: 0,
      height: 80,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: theme.colors.shadow,
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
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.outline,
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
                    ? theme.colors.onPrimary
                    : theme.colors.onPrimaryContainer
                  : isFocused
                    ? theme.colors.primary
                    : theme.colors.onSurface,
                size: isMiddle ? 50 : 40,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
