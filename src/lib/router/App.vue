<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui';
import type { GlobalThemeOverrides } from 'naive-ui';
import { defineAsyncComponent } from 'vue';
import LoadingView from './LoadingView.vue';

const TopBar = defineAsyncComponent(() => import('@/lib/TopBar.vue'));

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#9eb9fd',
  },
};
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <LoadingView />
      <TopBar />
      <RouterView />
    </n-message-provider>
  </NConfigProvider>
</template>
