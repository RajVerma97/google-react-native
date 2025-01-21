import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '@queries/fetch-news';
export default function useFetchNews() {
  return useQuery({
    queryKey: ['fetch-news'],
    queryFn: fetchNews,
  });
}
