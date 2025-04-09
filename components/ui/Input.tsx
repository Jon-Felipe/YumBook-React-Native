import { View, Text, TextInput } from 'react-native';
import React from 'react';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        className='bg-neutral-100 rounded-lg w-full px-4 mt-2'
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
