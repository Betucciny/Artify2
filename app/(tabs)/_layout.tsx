import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home Screen",
                    tabBarIcon: ({color}) => <Ionicons name="log-in" size={24} color={color} />,
                    headerShown: false,
                    href: "/home",
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color} />,
                    headerShown: false,
                    href: "/create",
                }}
            />
        </Tabs>
    );
}