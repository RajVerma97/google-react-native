import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import GoogleShortcuts from '@/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/components/EnvironmentalMetrics';
import NewsFeed from '@/components/NewsFeed';
import GoogleLogoImage from '@assets/images/google-logo.png';
import { SafeAreaView } from 'react-native';

export default function Tab() {
  return (
    <SafeAreaView>
      <ScrollView className="p-8 bg-[#1F2125]">
        <Header />
        <View className="flex justify-center items-center mt-8 text-center">
          <Image source={GoogleLogoImage} />
        </View>

        <SearchForm />
        <GoogleShortcuts />
        <EnvironmentalMetrics />
        <NewsFeed />
      </ScrollView>
    </SafeAreaView>
  );
}
