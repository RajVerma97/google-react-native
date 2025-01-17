import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Header from '../../components/Header';
import SearchForm from '@/components/SearchForm';
import GoogleShortcuts from '@/components/GoogleShortcuts';
import EnvironmentalMetrics from '@/components/EnvironmentalMetrics';
import NewsFeed from '@/components/NewsFeed';
// import GoogleLogoImage from '../../../assets/images/';
import { SafeAreaView } from 'react-native';

export default function Tab() {
  return (
    <SafeAreaView>
      <ScrollView className="p-8 bg-[#1F2125]">
        <Header />
        {/* <View className="flex justify-center items-center mt-8 text-center">
          <Image source={GoogleLogoImage} />
        </View> */}
        <Text
          className="text-3xl text-white font-poppins-regular "
          // style={{ fontFamily: 'Poppins-Regular' }}
        >
          Test
        </Text>

        <SearchForm />
        <GoogleShortcuts />
        <EnvironmentalMetrics />
        <NewsFeed />
      </ScrollView>
    </SafeAreaView>
  );
}
