import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
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
  const [query, setQuery] = useState('');
  const [showWebView, setShowWebView] = useState(false);

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
    setShowWebView(true);
  };
  const goBack = () => {
    router.push('/');
  };
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setQuery(e.nativeEvent.text);
  };

  useEffect(() => {
    if (showWebView) {
      const uri = `https://google.com/search?q=${query}`;
      const encodedUri = encodeURIComponent(uri as string);
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        router.push({
          pathname: '/webview/[uri]',
          params: { uri: encodedUri },
        });
      } else {
        window.location.href = uri;
      }
    }
  }, [showWebView, query]);
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
