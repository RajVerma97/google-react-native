import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function fetchNews() {
  const response = await axios.get(NEWS_API_URL);
  return response.data;
}
