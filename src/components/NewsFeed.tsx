import { Link } from 'expo-router';
import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';

type NewsItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  publishedDate: string;
  author?: string;
  url?: string;
  category: string;
};

type News = Array<NewsItem>;

const news: News = [
  {
    id: 1,
    image: 'https://www.sammyfans.com/wp-content/uploads/2024/12/now-bar-one-ui-7-img.jpg',
    title: 'one uiwatch: one ui 7 packs gorgeous welcome screen animations',
    description:
      'samsung’s new one ui 7 takes the welcome screen experience to a whole new level with buttery smooth animations. ',
    publishedDate: '12 hours ago on january 16, 2025',
    author: 'james lee taylor',
    url: 'https://www.sammyfans.com/2025/01/16/one-ui-7-welcome-screen-animations/',
    category: 'technology',
  },
  {
    id: 2,
    image:
      'https://www.hindustantimes.com/ht-img/img/2025/01/16/400x225/Red_meat_1737035723588_1737035723790.jpg',
    title:
      'red meat eaters beware! study shows it could increase dementia risks; suggests safer proteins',
    description:
      'dementia and other neurodegenerative diseases from brain decline are often seen with age. to reduce the risk from it, ',
    publishedDate: 'jan 16, 2025 07:36 pm ist',
    author: 'adrija dey',
    url: 'https://www.hindustantimes.com/lifestyle/health/red-meat-eaters-beware-study-shows-it-could-increase-dementia-risks-suggests-safer-proteins-101737035003524.html',
    category: 'health',
  },
  {
    id: 3,
    image:
      'https://static.toiimg.com/thumb/msid-117304242,imgsize-361244,width-400,resizemode-4/117304242.jpg',
    title: 'Nintendo Switch 2 console Revealed',
    description: 'Nintendo has finally taken the wraps off its next gaming console',
    publishedDate: 'Jan 16 2025',
    author: 'Times of India',
    url: 'https://timesofindia.indiatimes.com/technology/gaming/nintendo-switch-2-console-revealed-in-first-trailer-heres-all-you-need-to-know/articleshow/117304082.cms',
    category: 'Technology',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'healthy eating habits for a better life',
    description: 'learn how to improve your diet and maintain a healthy lifestyle.',
    publishedDate: '2023-09-20t08:00:00z',
    author: 'bob brown',
    url: 'https://example.com/healthy-eating-habits',
    category: 'health',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    title: 'the rise of remote work in 2023',
    description: 'how remote work is changing the way we work and live.',
    publishedDate: '2023-09-18t14:20:00z',
    author: 'charlie davis',
    url: 'https://example.com/rise-of-remote-work',
    category: 'business',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    title: 'exploring the wonders of space',
    description: 'a look at the latest discoveries in space exploration.',
    publishedDate: '2023-09-15t11:10:00z',
    author: 'eva green',
    url: 'https://example.com/wonders-of-space',
    category: 'science',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    title: 'the art of minimalist living',
    description: 'how to declutter your life and embrace minimalism.',
    publishedDate: '2023-09-10t07:50:00z',
    author: 'frank white',
    url: 'https://example.com/art-of-minimalism',
    category: 'lifestyle',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    title: 'the impact of climate change on wildlife',
    description: 'understanding how climate change is affecting ecosystems and species.',
    publishedDate: '2023-09-05t16:30:00z',
    author: 'grace lee',
    url: 'https://example.com/climate-change-wildlife',
    category: 'environment',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    title: 'the evolution of e-commerce',
    description: 'how online shopping has changed over the years and what’s next.',
    publishedDate: '2023-09-01t10:15:00z',
    author: 'henry taylor',
    url: 'https://example.com/evolution-of-ecommerce',
    category: 'business',
  },
  {
    id: 10,
    image:
      'https://timesofindia.indiatimes.com/technology/gaming/nintendo-switch-2-console-revealed-in-first-trailer-heres-all-you-need-to-know/articleshow/117304082.cmstps://via.placeholder.com/150',
    title: 'the benefits of meditation for mental health',
    description: 'how meditation can improve your mental well-being and reduce stress.',
    publishedDate: '2023-08-28t13:00:00z',
    author: 'ivy clark',
    url: 'https://example.com/benefits-of-meditation',
    category: 'health',
  },
];

export default function NewsFeed() {
  return (
    <View className="mt-8 grid gap-8 font-poppins-regular">
      {news?.map((newsItem: NewsItem) => (
        <TouchableOpacity key={newsItem.id} className="p-4 border border-gray-600 p-4 rounded-2xl">
          <Image source={{ uri: newsItem.image }} className="h-[15rem] rounded-2xl" />
          <View className="px-0 py-4">
            <Text className="text-3xl capitalize font-semibold text-white">
              {newsItem.title.substring(0, 40)}
            </Text>

            <Text className="text-xl capitalize  mt-2 text-white">
              {newsItem.description.substring(0, 60)}
            </Text>
            <View>
              <Text className="font-medium capitalize text-xl text-gray-400 mt-8">
                {newsItem.publishedDate}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
