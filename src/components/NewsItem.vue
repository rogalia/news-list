<template>
  <div class="news-item">
    <img
      class="news-item__img"
      :src="item.imgUrl"
    >

    <h2 class="news-item__title">
      {{ item.title }}
    </h2>

    <p class="news-item__desc">
      {{ item.desc }}
    </p>

    <div class="news-item__footer">
      <CalendarIcon class="news-item__footer-icon" />
      {{ displayedTime }}
      <span>|</span>
      {{ item.author.firstName }} {{ item.author.lastName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItem } from '@/types/News.ts';

const props = defineProps<{
  item: NewsItem;
}>();

import CalendarIcon from '@/assets/svg/calendar.svg';

const displayedTime = new Date(props.item.createdAt).toLocaleDateString('uk-UA');
</script>

<style scoped>
.news-item__img {
  width: 100%;
  height: 240px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.news-item__title {
  color: var(--color-primary-text);
}

.news-item__desc {
  font-family: Lato, sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  margin: 8px 0;
  color: var(--color-text);
}

.news-item__footer {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-secondary-text);
  font-size: 14px;
  line-height: 1;
}

.news-item__footer-icon {
  width: 24px;
}

@media (width <= 1200px) {
  .news-item__desc {
    font-size: 14px;
  }

  .news-item__footer {
    font-size: 12px;
    gap: 4px;
  }

  .news-item__footer-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
