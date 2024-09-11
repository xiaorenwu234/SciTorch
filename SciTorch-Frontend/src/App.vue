<script setup>
</script>

<template>
  <router-view v-slot="{ Component }" class="w-screen h-screen">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.use_font {
  font-family: 'TsangerYuYangT_W03_W03',sans-serif;
}
</style>
