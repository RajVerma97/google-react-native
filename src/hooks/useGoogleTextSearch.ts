import { useQuery } from '@tanstack/react-query';
import { googleTextSearch } from '@/queries/google-text-search';

export function useGoogleTextSearch(query: string) {
  return useQuery({
    queryKey: ['text-search', query],
    queryFn: () => googleTextSearch(query),
  });
}
