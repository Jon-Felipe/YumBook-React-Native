import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// extras
import { GlobalStyles } from '../../styles';

export default function Button() {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Click Me</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 24,
    padding: 14,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
