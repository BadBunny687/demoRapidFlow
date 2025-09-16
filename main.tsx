import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    backgroundColor: "#121212",
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 30,   // makes it tall
    paddingHorizontal: 80, // makes it wide
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
