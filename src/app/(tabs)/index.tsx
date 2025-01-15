import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import SearchForm from '@/src/components/SearchForm';
import GoogleShortcuts from '@/src/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/src/app/components/EnvironmentalMetrics';
import NewsFeed from '@/src/components/NewsFeed';

export default function Tab() {
  return (
    <View>
      <Text>hellokko</Text>
      <Header />
      <Text className="bg-pink-500 mt-4 text-lg">Google</Text>
      <SearchForm />
      <GoogleShortcuts />
      <EnvironmentalMetrics />
      <NewsFeed />
    </View>
  );
}
