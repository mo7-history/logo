<script setup lang="ts">
import { Logo } from '@/config/constant';
</script>

<template>
  <div class="Home">
    <div>Home</div>
    <img class="logo-c" :src="Logo" alt="" srcset="" />
    <img class="logo-r" :src="Logo" alt="" srcset="" />
  </div>
</template>

<style scoped lang="less">
.Home {
  background-color: #999;
}
.logo-c {
  display: block;
  margin: 0 auto;
  width: 50%;
  border-radius: 100%;
}
.logo-r {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>
