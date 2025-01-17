import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export enum MODE {
  SEARCH = 'SEARCH',
  HOME = 'HOME',
}
type SearchFormProps = {
  mode?: MODE;
};
export default function SearchForm({ mode }: SearchFormProps) {
  const handleSearch = () => {
    if (mode === MODE.SEARCH) {
      return;
    }
    console.log('hello search');
    setTimeout(() => {
      router.push('/search');
    }, 200);
  };

  const handleSubmit = () => {
    console.log('handle submit');
  };
  const goBack = () => {
    router.push('/');
  };
  return (
    <View className="flex flex-row justify-between bg-[#2F3133] items-center p-4   mt-8 rounded-full">
      <View className="flex-row">
        {mode === MODE.SEARCH ? (
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="arrow-back" size={26} color="gray" />
          </TouchableOpacity>
        ) : (
          <MaterialIcons name="search" size={26} color="gray" />
        )}
        <TextInput
          className="ml-2 text-xl text-white"
          placeholder={'Search'}
          onFocus={handleSearch}
          onSubmitEditing={handleSubmit}
        />
      </View>

      <View className="flex flex-row justify-center items-center ">
        <MaterialIcons name="mic" size={26} color="white" className="mr-2" />
        <MaterialIcons name="image-search" size={26} color="white" />
      </View>
    </View>
  );
}
