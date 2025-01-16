import React from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function SearchForm() {
  return (
    <View className="flex flex-row justify-between items-center border-2 p-2   mt-8 rounded-3xl">
      <View className="flex-row">
        <MaterialIcons name="search" size={28} />
        <TextInput className="" />
      </View>

      <View className="flex flex-row">
        <MaterialIcons name="mic" size={28} />
        <MaterialIcons name="image-search" size={28} />
      </View>
    </View>
  );
}
