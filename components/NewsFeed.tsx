import React from 'react';
import { Image, View, Text } from 'react-native';

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
    image: 'https://via.placeholder.com/150',
    title: 'React Native 101: Getting Started with Mobile Development',
    description: 'Learn the basics of React Native and build your first mobile app.',
    publishedDate: '2023-10-01T12:00:00Z',
    author: 'John Doe',
    url: 'https://example.com/react-native-101',
    category: 'Technology',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Top 10 JavaScript Frameworks in 2023',
    description: 'Discover the most popular JavaScript frameworks and libraries this year.',
    publishedDate: '2023-09-28T09:30:00Z',
    author: 'Jane Smith',
    url: 'https://example.com/top-10-js-frameworks',
    category: 'Technology',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'The Future of Artificial Intelligence',
    description: 'Explore how AI is transforming industries and what the future holds.',
    publishedDate: '2023-09-25T15:45:00Z',
    author: 'Alice Johnson',
    url: 'https://example.com/future-of-ai',
    category: 'Science',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Healthy Eating Habits for a Better Life',
    description: 'Learn how to improve your diet and maintain a healthy lifestyle.',
    publishedDate: '2023-09-20T08:00:00Z',
    author: 'Bob Brown',
    url: 'https://example.com/healthy-eating-habits',
    category: 'Health',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    title: 'The Rise of Remote Work in 2023',
    description: 'How remote work is changing the way we work and live.',
    publishedDate: '2023-09-18T14:20:00Z',
    author: 'Charlie Davis',
    url: 'https://example.com/rise-of-remote-work',
    category: 'Business',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    title: 'Exploring the Wonders of Space',
    description: 'A look at the latest discoveries in space exploration.',
    publishedDate: '2023-09-15T11:10:00Z',
    author: 'Eva Green',
    url: 'https://example.com/wonders-of-space',
    category: 'Science',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    title: 'The Art of Minimalist Living',
    description: 'How to declutter your life and embrace minimalism.',
    publishedDate: '2023-09-10T07:50:00Z',
    author: 'Frank White',
    url: 'https://example.com/art-of-minimalism',
    category: 'Lifestyle',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    title: 'The Impact of Climate Change on Wildlife',
    description: 'Understanding how climate change is affecting ecosystems and species.',
    publishedDate: '2023-09-05T16:30:00Z',
    author: 'Grace Lee',
    url: 'https://example.com/climate-change-wildlife',
    category: 'Environment',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    title: 'The Evolution of E-Commerce',
    description: 'How online shopping has changed over the years and what’s next.',
    publishedDate: '2023-09-01T10:15:00Z',
    author: 'Henry Taylor',
    url: 'https://example.com/evolution-of-ecommerce',
    category: 'Business',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/150',
    title: 'The Benefits of Meditation for Mental Health',
    description: 'How meditation can improve your mental well-being and reduce stress.',
    publishedDate: '2023-08-28T13:00:00Z',
    author: 'Ivy Clark',
    url: 'https://example.com/benefits-of-meditation',
    category: 'Health',
  },
];

export default function NewsFeed() {
  return (
    <View>
      {news?.map((newsItem: NewsItem) => (
        <View key={newsItem.id}>
          <Image source={{ uri: newsItem.image }} />
          <View>
            <Text>{newsItem.title}</Text>

            <Text>{newsItem.description}</Text>
            <View>
              <Text>{newsItem.publishedDate}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
