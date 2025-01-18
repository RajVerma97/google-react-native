import React from 'react';
import { ScrollView } from 'react-native';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import GoogleShortcuts from '@/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/components/EnvironmentalMetrics';
import NewsFeed from '@/components/NewsFeed';
import { SafeAreaView } from 'react-native';
import GoogleLogo from '@/components/GoogleLogo';
import HorizontalDivider from '@/components/HorizontalDivider';
import GoogleSignIn from '@/components/GoogleSignIn';

export default function Tab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="p-8 bg-[#1F2125]">
        <Header />
        <GoogleSignIn />
        <GoogleLogo />
        <SearchForm />
        <GoogleShortcuts />
        <HorizontalDivider />
        <EnvironmentalMetrics />
        <NewsFeed />
      </ScrollView>
    </SafeAreaView>
  );
}
