import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'


// Button component with onPress event, title, and optional color prop
const Button = ({ marginBottom = 20, onPress, title, backgroundColor = Colors.blue, color = Colors.black, outlined = false }) => {
  return (
    // Pressable component with onPress event and styling
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: outlined ? Colors.black : backgroundColor, marginBottom: marginBottom, borderColor: outlined && backgroundColor }]}>
      {/* Text component for the button title with styling */}
      <Text style={[styles.text, { color: outlined ? Colors.white : color}]}>{title}</Text>
    </Pressable>
  );
};

// Styles for the Button component
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#111', // Default background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbb'
  },
  text: {
    color: '#222', // Default text color
    fontSize: 15,
    fontFamily: "Lato_700Bold",
    fontWeight: '700',
    textTransform: "uppercase", // Uppercase text
  },
});

export default Button;
