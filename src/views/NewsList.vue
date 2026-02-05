<template>
  <div class="news-list">
    <div class="container">
      <h1>
        Last news
      </h1>

      <div class="news-list__container">
        <NewsItem
          v-for="item in newsList"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import NewsItem from '@/components/NewsItem.vue';
import { getNews } from '@/services/news.ts';
import type { NewsItem as NewsItemType } from '@/types/News';

const newsList = ref<NewsItemType[]>([]);

const loadNews = async () => {
  newsList.value = await getNews();
};

loadNews();
</script>

<style scoped>
.news-list {
  padding: 48px 0 72px;
}

.news-list__container {
  padding: 40px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

@media (width <= 1200px) {
  .news-list {
    padding: 28px 0 40px;
  }

  .news-list__container {
    padding: 20px 0 0;
    gap: 30px 20px;
  }
}

@media (width <= 1024px) {
  .news-list {
    padding: 12px 0 24px;
  }

  .news-list__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width <= 768px) {
  .news-list__container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
