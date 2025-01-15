import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import SearchForm from '@/components/SearchForm';
import GoogleShortcuts from '@/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/components/EnvironmentalMetrics';
import NewsFeed from '@/components/NewsFeed';

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
