import axios from 'axios';

const API_KEY = '7852ceae6d4a4086b711dfcd571bdeb3';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function fetchNews() {
  const response = await axios.get(NEWS_API_URL);
  return response.data;
}
