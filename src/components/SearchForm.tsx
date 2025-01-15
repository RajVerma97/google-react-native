import React from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function SearchForm() {
  return (
    <View className="p-2">
      <View>
        <MaterialIcons name="search" size={28} />
        <TextInput />
      </View>

      <View>
        <MaterialIcons name="mic" size={28} />
        <MaterialIcons name="image-search" size={28} />
      </View>
    </View>
  );
}
