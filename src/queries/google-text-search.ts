import axios from 'axios';

const SEARCH_ENGINE_ID = 'd5ae671ad0f864179';
const CUSTOM_SEARCH_API_KEY = 'AIzaSyAzcc1zKHx8fZYoo5uDEQvby6fENMDng6k';

export async function googleTextSearch(query: string) {
  console.log(query);
  const response = await axios.get(
    `https://customsearch.googleapis.com/customsearch/v1?cx=${SEARCH_ENGINE_ID}&q=${query}&key=${CUSTOM_SEARCH_API_KEY}`,
  );
  return response.data;
}
