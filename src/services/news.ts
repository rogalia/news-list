import type { NewsItem } from '@/types/News.ts';

export async function getNews(): Promise<NewsItem[]> {
  const res = await fetch('/news.json');
  
  return res.json();
}