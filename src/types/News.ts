export interface NewsItem {
  id: number;
  imgUrl: string;
  title: string,
  desc: string,
  author: {
    firstName: string,
    lastName: string,
  },
  // using timestamp directly to avoid overengineering
  createdAt: number; // Unix timestamp (ms)
}