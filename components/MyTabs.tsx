import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { Dimensions } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 50,
      margin: 5,
      height: 90,
      position: "absolute",
      bottom: 10,
      left: 5,
      right: 5,
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
      backgroundColor: "blue",
      borderRadius: 50,
      width: 70,
      height: 70,
      position: "absolute",
      left: Dimensions.get("window").width / 2 - 40,
      bottom: 50,
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
                color: isFocused ? "blue" : "black",
                size: 35,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
