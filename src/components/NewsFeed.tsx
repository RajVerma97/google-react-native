import { NewsArticle } from '@/types/news-feed';
import React from 'react';
import { Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import useFetchNews from '@hooks/useFetchNews';
import { router } from 'expo-router';

export default function NewsFeed() {
  const { data } = useFetchNews();
  const articles = data?.articles;

  const filteredArticles = articles?.filter(
    (article: NewsArticle) => article.title !== '[Removed]' || article.content != '[Removed]',
  );
  const handlePress = (uri: string) => {
    if (Platform.OS === 'web') {
      window.location.href = uri;
    } else if (Platform.OS === 'android' || Platform.OS === 'ios') {
      const encodedUri = encodeURIComponent(uri);
      router.push({
        pathname: '/webview/[uri]',
        params: { uri: encodedUri },
      });
    }
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };
  return (
    <View className="mt-8 grid gap-8">
      {filteredArticles?.map((newsArticle: NewsArticle, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(newsArticle.url)}
          className="border border-gray-600 p-4 rounded-2xl"
        >
          <Image source={{ uri: newsArticle.urlToImage }} className="h-[15rem] rounded-xl" />
          <View className="px-0 py-4">
            <Text className="text-3xl capitalize font-medium  font-inter text-white">
              {newsArticle?.title?.substring(0, 40)}
            </Text>

            <View className="flex flex-row justify-between items-center  mt-16">
              <Text className="font-medium  font-inter capitalize text-xl text-gray-400">
                {formatDate(newsArticle?.publishedAt)}
              </Text>
              <Text className="font-medium font-inter uppercase text-xl text-blue-500">
                {newsArticle?.source?.name.substring(0, 10)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
