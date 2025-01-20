export type NewsItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  publishedDate: string;
  author?: string;
  url?: string;
  category: string;
};
export type News = Array<NewsItem>;
