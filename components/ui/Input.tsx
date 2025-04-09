import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  iconRight?: React.ReactNode;
};

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  iconRight,
}: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
        {iconRight && (
          <View style={styles.iconRightContainer}>{iconRight}</View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconRightContainer: {},
});
