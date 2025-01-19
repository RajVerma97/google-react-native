import React from 'react';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useGoogleTextSearch } from '@/hooks/useGoogleTextSearch';

export enum MODE {
  SEARCH = 'SEARCH',
  HOME = 'HOME',
}
type SearchFormProps = {
  mode?: MODE;
};
export default function SearchForm({ mode }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const { data } = useGoogleTextSearch(query);
  console.log(data);
  const handleSearch = () => {
    if (mode === MODE.SEARCH) {
      return;
    }
    console.log('hello search');
    setTimeout(() => {
      router.push('/search');
    }, 200);
  };

  const handleSubmit = () => {};
  const goBack = () => {
    router.push('/');
  };
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setQuery(e.nativeEvent.text);
  };
  return (
    <View className="flex flex-row justify-between bg-[#2F3133] items-center p-4   mt-8 rounded-full">
      <View>
        <Text className="text-white text-2xl">{query}</Text>
      </View>
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
          value={query}
          onChange={handleChange}
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
