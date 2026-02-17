<template>
  <div class="app">
    <AppHeader />

    <router-view />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import { getUser } from '@/services/user';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const loadUser = async () => {
  userStore.setUser(await getUser());
};

loadUser();
</script>

<style scoped>
.app {
  padding: 76px 0 0;
}

@media (width <= 1024px) {
  .app {
    padding: 60px 0 0;
  }
}
</style>
