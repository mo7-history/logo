<script setup lang="ts">
import svgLogo from '@/assets/svg/logo.svg';
</script>

<template>
  <div>Home</div>
  <img class="logo" :src="svgLogo" alt="" srcset="" />
</template>

<style scoped lang="less">
.logo {
  border-radius: 100%;
}
</style>
