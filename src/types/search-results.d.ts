export type SearchResult = {
  id: string;
  query: string;
  timestamp: Date;
  userId?: string;
};

type SearchResults = Array<SearchResult>;
