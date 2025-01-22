import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchForm from '@components/SearchForm';
import { MODE } from '@components/SearchForm';
import MaterialIcons from '@expo/vector-icons/MaterialIcons.js';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '@/utils/firebase';
import { SearchResult, SearchResults } from '@/types/search-results';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';

export default function Search() {
  const [results, setResults] = useState<SearchResults | null>(null);
  const { user } = useGoogleAuth();

  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchUserSearchResults = async (userId: string, limitCount: number = 20) => {
      try {
        const searchCollectionRef = collection(firestore, 'search-results');

        const q = query(
          searchCollectionRef,
          where('userId', '==', userId),
          orderBy('timestamp', 'desc'),
          limit(limitCount),
        );

        const querySnapshot = await getDocs(q);
        const results: SearchResults = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          results.push({
            id: doc.id,
            query: data.query,
            timestamp: data.timestamp.toDate(),
            userId: data.userId,
          });
        });
        setResults(results);
      } catch (error) {
        console.error('Error fetching user search results: ', error);
        return [];
      }
    };
    fetchUserSearchResults(user.id);
  }, [user]);

  const handlePress = (query: string) => {
    setSelectedQuery(query);
  };

  return (
    <SafeAreaView className=" bg-[#1F2125]" style={{ flex: 1 }}>
      <View className="px-4" style={{ flex: 1 }}>
        <SearchForm mode={MODE.SEARCH} selectedQuery={selectedQuery} />
        {!user && <Text className="mt-4 text-xl self-center text-red-500">No user logged in</Text>}
        <View className="mt-8" style={{ flex: 1 }}>
          <Text className="text-gray-400 font-medium text-lg font-inter">Recent Searches</Text>
          <ScrollView>
            {results?.map((searchResult: SearchResult) => (
              <TouchableOpacity
                className="flex flex-row  items-center mt-6"
                key={searchResult.id}
                onPress={() => handlePress(searchResult.query)}
              >
                <MaterialIcons name="history" color="gray" size={28} />
                <Text className="text-white text-xl w-full font-inter ml-4">
                  {searchResult.query}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
