import ThemedView, { ThemedText } from "@/components/ThemedComponents";
import { View, Text, StyleSheet } from "react-native";




export default function Home() {
    const styles = StyleSheet.create({
        container_global: {
            flex: 1,
            backgroundColor: "white",
            justifyContent: "space-evenly",
            alignItems: "center"
        },
    })

    return (
        <ThemedView style={styles.container_global}>
            <ThemedText>Hola mundo</ThemedText>
        </ThemedView>
    )
}