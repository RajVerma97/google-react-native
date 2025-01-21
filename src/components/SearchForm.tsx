import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
  Platform,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToCloudinary } from '@/utils/cloundinary';
import { firestore } from '@utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import useUser from '@/hooks/useUser';
export enum MODE {
  SEARCH = 'SEARCH',
  HOME = 'HOME',
}
type SearchFormProps = {
  mode?: MODE;
  selectedQuery?: string | null;
};

enum SEARCHTYPE {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}
export default function SearchForm({ mode, selectedQuery }: SearchFormProps) {
  const { user } = useUser();
  const [query, setQuery] = useState('');
  const [showWebView, setShowWebView] = useState(false);
  const [searchType, setSearchType] = useState<SEARCHTYPE>(SEARCHTYPE.TEXT);
  const [downloadImageUrl, setDownloadImageUrl] = useState<null | string>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (selectedQuery) {
      setQuery(selectedQuery);
    }
  }, [selectedQuery]);

  const handleSearch = () => {
    if (mode === MODE.SEARCH) {
      return;
    }
    setTimeout(() => {
      router.push('/search');
    }, 200);
  };

  const addQueryToFirebase = async (query: string) => {
    try {
      if (!user) {
        throw new Error('No authenticated user found');
      }
      const collectionRef = collection(firestore, 'search-results');
      const data = {
        query: query,
        timestamp: new Date(),
        userId: user.uid,
      };
      await addDoc(collectionRef, data);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleSubmit = async () => {
    await addQueryToFirebase(query);
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
        uri = `https://lens.google.com/uploadbyurl?url=${downloadImageUrl}`;
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
  }, [showWebView, query, searchType, downloadImageUrl]);

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
        const asset = result.assets[0];
        const uri = asset.uri;

        setUploading(true);
        const downloadURL = await uploadImageToCloudinary(uri);
        setUploading(false);

        setDownloadImageUrl(downloadURL);
        setSearchType(SEARCHTYPE.IMAGE);
        setShowWebView(true);
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };
  return (
    <View className="flex flex-row justify-between bg-[#2F3133] items-center p-4   mt-8 rounded-full">
      <View className="flex flex-row items-center">
        {mode === MODE.SEARCH ? (
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="arrow-back" size={26} color="gray" />
          </TouchableOpacity>
        ) : (
          <MaterialIcons name="search" size={26} color="gray" />
        )}
        <TextInput
          className="ml-2 text-xl text-white  w-60 md:w-[1000]"
          placeholder={'Search'}
          onFocus={handleSearch}
          value={query}
          onChange={handleChange}
          onSubmitEditing={handleSubmit}
        />
      </View>

      <View className="flex flex-row justify-center items-center ">
        <TouchableOpacity className="w-8 mr-2">
          <MaterialIcons name="mic" size={26} color="white" />
        </TouchableOpacity>
        {!uploading ? (
          <TouchableOpacity onPress={pickImage} className="w-8">
            <MaterialIcons name="image-search" size={26} color="white" />
          </TouchableOpacity>
        ) : (
          <View className="w-8">
            <ActivityIndicator size="small" color="white" />
          </View>
        )}
      </View>
    </View>
  );
}
