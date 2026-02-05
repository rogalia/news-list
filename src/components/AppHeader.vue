<template>
  <header class="header">
    <div class="container container--flex">
      <a href="/">
        <Logo class="header__logo" />
      </a>

      <div class="header__profile">
        {{ user?.firstName }} {{ user?.lastName }}

        <img
          class="header__user-image"
          :src="user?.imgUrl"
          :alt="`${user?.firstName} ${user?.lastName}`"
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import Logo from '@/assets/svg/logo.svg';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);
</script>

<style scoped>
.header {
  text-align: center;
  padding: 16px 0;
  box-shadow: 0 4px 10px 0 #00000012;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-background);
}

.header__logo {
  width: 120px;
}

.header__profile {
  display: flex;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: 400;
  gap: 12px;
  color: var(--color-text);
  font-size: 16px;
}

.header__user-image {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}

@media (width <= 1024px) {
  .header {
    padding: 12px 0;
  }

  .header__profile {
    font-size: 12px;
  }

  .header__user-image {
    width: 30px;
    height: 30px;
  }
}
</style>