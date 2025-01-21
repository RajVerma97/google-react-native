export type NewsArticleSource = {
  id: string;
  name: string;
};
export type NewsArticle = {
  author?: string;
  content: string;
  description: string;
  publishedAt: string;
  source?: NewsArticleSource;
  title: string;
  url: string;
  urlToImage: string;
};
export type Articles = Array<NewsArticle>;
