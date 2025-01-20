import { news } from '@/data/news-feed';
import { NewsItem } from '@/types/news-feed';
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

export default function NewsFeed() {
  return (
    <View className="mt-8 grid gap-8">
      {news?.map((newsItem: NewsItem) => (
        <TouchableOpacity key={newsItem.id} className="border border-gray-600 p-4 rounded-2xl">
          <Image source={{ uri: newsItem.image }} className="h-[15rem] rounded-2xl" />
          <View className="px-0 py-4">
            <Text className="text-3xl capitalize font-medium  font-inter text-white">
              {newsItem.title.substring(0, 40)}
            </Text>

            <Text className="text-xl capitalize  mt-2 text-white font-inter">
              {newsItem.description.substring(0, 100)}
            </Text>
            <View>
              <Text className="font-medium  font-inter capitalize text-xl text-gray-400 mt-12">
                {newsItem.publishedDate}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
