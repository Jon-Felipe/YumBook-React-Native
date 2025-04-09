import { View, Text, TextInput } from 'react-native';
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
      <Text className='mb-2'>{label}</Text>
      <View className='bg-neutral-100 flex flex-row items-center justify-between px-4 rounded-lg'>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
        {iconRight && <View>{iconRight}</View>}
      </View>
    </View>
  );
}
