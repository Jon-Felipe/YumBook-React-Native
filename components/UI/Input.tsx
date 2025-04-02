import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import React from 'react';

// extras
import { GlobalStyles } from '../../constants/styles';

type InputProps = {
  labelText: string;
  placeholderText?: string;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({
  labelText,
  placeholderText,
  secureTextEntry = false,
  rightIcon,
  value,
  onChangeText,
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
          value={value}
          onChangeText={onChangeText}
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
