import React from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function SearchForm() {
  return (
    <View className="flex flex-row justify-between bg-[#2F3133] items-center p-4   mt-8 rounded-full">
      <View className="flex-row">
        <MaterialIcons name="search" size={26} color="gray" />
        <TextInput className="ml-2 text-xl text-white" placeholder={'Search'} />
      </View>

      <View className="flex flex-row justify-center items-center ">
        <MaterialIcons name="mic" size={26} color="white" className="mr-2" />
        <MaterialIcons name="image-search" size={26} color="white" />
      </View>
    </View>
  );
}
