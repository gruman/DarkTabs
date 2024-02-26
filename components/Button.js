import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Button component with onPress event, title, and optional color prop
const Button = ({ marginBottom = 20, onPress, title, backgroundColor = "#111", color = "#fff" }) => {
  return (
    // Pressable component with onPress event and styling
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: backgroundColor, marginBottom: marginBottom }]}>
      {/* Text component for the button title with styling */}
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </Pressable>
  );
};

// Styles for the Button component
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#111', // Default background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', // Default text color
    fontFamily: "Lato_700Bold",
    fontSize: 21,
    textTransform: "uppercase", // Uppercase text
  },
});

export default Button;
