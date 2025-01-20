import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchForm from '@components/SearchForm';
import { MODE } from '@components/SearchForm';
import MaterialIcons from '@expo/vector-icons/MaterialIcons.js';
import { SEARCH_RESULTS } from '@/data/search-results';
import { SearchResultItem } from '@/types/search-results';

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
