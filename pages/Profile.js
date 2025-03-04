import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgreen",
    },
    text: {
        fontSize: 24,
    },
});
