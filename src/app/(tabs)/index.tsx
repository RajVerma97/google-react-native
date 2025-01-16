import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import SearchForm from '@/components/SearchForm';
import GoogleShortcuts from '@/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/components/EnvironmentalMetrics';
import NewsFeed from '@/components/NewsFeed';

export default function Tab() {
  return (
    <View className="p-8">
      <Header />
      <Text className="border-2 text-center mt-4 text-[4rem]">Google</Text>
      <SearchForm />
      <GoogleShortcuts />
      <EnvironmentalMetrics />
      <NewsFeed />
    </View>
  );
}
