import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// extras
import { GlobalStyles } from '../../styles';

type InputProps = {
  labelText: string;
  placeholderText?: string;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
};

export default function Input({
  labelText,
  placeholderText,
  secureTextEntry = false,
  rightIcon,
}: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholderText}
          placeholderTextColor={GlobalStyles.colors.gray500}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: GlobalStyles.colors.gray700,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.colors.gray50,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});
