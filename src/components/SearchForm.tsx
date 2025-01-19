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
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

export enum MODE {
  SEARCH = 'SEARCH',
  HOME = 'HOME',
}
type SearchFormProps = {
  mode?: MODE;
};

enum SEARCHTYPE {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}
export default function SearchForm({ mode }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [showWebView, setShowWebView] = useState(false);
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [searchType, setSearchType] = useState<SEARCHTYPE>(SEARCHTYPE.TEXT);

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
    setSearchType(SEARCHTYPE.TEXT);
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
      let uri: string;
      if (searchType === SEARCHTYPE.TEXT) {
        uri = `https://google.com/search?q=${query}`;
      } else if (searchType === SEARCHTYPE.IMAGE) {
        uri =
          'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Ftechcrunch.com%2Fwp-content%2Fuploads%2F2025%2F01%2FGettyImages-2181313521.jpg';
      } else {
        console.error('Invalid search type or missing image');
        return;
      }
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
  }, [showWebView, query, searchType]);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      if (result.assets && !result.canceled) {
        const uri = result.assets[0].uri;
        console.log(uri);
        setSearchType(SEARCHTYPE.IMAGE);
        setShowWebView(true);
        setPickedImage(uri);
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };
  return (
    <View className="flex flex-row justify-between bg-[#2F3133] items-center p-4   mt-8 rounded-full">
      {pickedImage && (
        <Image
          source={{
            uri: pickedImage,
          }}
          style={{ height: 300, width: 400 }}
        />
      )}
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
        <TouchableOpacity>
          <MaterialIcons name="mic" size={26} color="white" className="mr-2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="image-search" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
