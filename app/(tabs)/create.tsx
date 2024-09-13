import ThemedView, { ThemedText } from "@/components/ThemedComponents";
import {StyleSheet} from "react-native";




export default function Create() {
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
            <ThemedText>Adios mundo</ThemedText>
        </ThemedView>
    )
}