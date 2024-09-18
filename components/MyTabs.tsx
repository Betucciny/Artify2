import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';



export default function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const styles= StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            margin: 2,
            height: 70,
        },
        tabButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
        },
        icon: {
            width: 24,
            height: 24,
        },
    });


    return (
        <View style={styles.container   }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                        key={route.key}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {options.title}
                        </Text>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}