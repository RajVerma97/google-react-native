import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchForm from '../components/SearchForm';
import { MODE } from '../components/SearchForm';
import MaterialIcons from '@expo/vector-icons/MaterialIcons.js';

type SearchResultItem = {
  id: number;
  text: string;
};

type SearchResults = Array<SearchResultItem>;

const SEARCH_RESULTS: SearchResults = [
  {
    id: 1,
    text: 'watch black panther',
  },
  {
    id: 2,
    text: 'best restaurants near me',
  },
  {
    id: 3,
    text: 'how to learn React Native',
  },
  {
    id: 4,
    text: 'weather in New York today',
  },
  {
    id: 5,
    text: 'latest iPhone reviews',
  },
  {
    id: 6,
    text: 'how to bake a chocolate cake',
  },
  {
    id: 7,
    text: 'upcoming Marvel movies',
  },
  {
    id: 8,
    text: 'how to fix a leaky faucet',
  },
  {
    id: 9,
    text: 'best hiking trails in Colorado',
  },
  {
    id: 10,
    text: 'how to invest in stocks',
  },
];

export default function Search() {
  return (
    <SafeAreaView className=" bg-[#1F2125]" style={{ flex: 1 }}>
      <View className="px-4" style={{ flex: 1 }}>
        <SearchForm mode={MODE.SEARCH} />
        <View className="mt-8" style={{ flex: 1 }}>
          <Text className="text-gray-400 font-medium text-lg font-inter">Recent Searches</Text>
          <ScrollView>
            {[...SEARCH_RESULTS, ...SEARCH_RESULTS, ...SEARCH_RESULTS]?.map(
              (searchResultItem: SearchResultItem, index) => (
                <TouchableOpacity className="flex flex-row  items-center mt-6" key={index}>
                  <MaterialIcons name="history" color="gray" size={28} />
                  <Text className="text-white text-xl w-full font-inter ml-4">
                    {searchResultItem.text}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
